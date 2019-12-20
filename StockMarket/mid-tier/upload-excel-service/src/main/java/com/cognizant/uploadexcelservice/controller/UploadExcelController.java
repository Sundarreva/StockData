package com.cognizant.uploadexcelservice.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Iterator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.cognizant.uploadexcelservice.model.UploadSummary;
import com.cognizant.uploadexcelservice.service.UploadExcelService;

@RestController
@RequestMapping("/excelfile")
public class UploadExcelController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UploadExcelController.class);

    @Autowired
    private UploadExcelService uploadExcelService;

    @PostMapping("/upload")
	 public void UploadFile(MultipartHttpServletRequest request) throws IOException {
    	LOGGER.info("Start");

       Iterator<String> itr = request.getFileNames();
       MultipartFile file = request.getFile(itr.next());
       String fileName = file.getOriginalFilename();
       File dir = new File("C:\\Users\\Admin\\Desktop"); 
       if (dir.isDirectory()) {
         File serverFile = new File(dir, fileName);
         BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
         stream.write(file.getBytes());
         stream.close();
       }
       uploadExcelService.storeFile(dir+"\\"+fileName);
       LOGGER.info("End");
     }
	
	@GetMapping("/summary")
	public UploadSummary getSummary() {
		LOGGER.info("Start");
		return uploadExcelService.getSummary();

	}
	
	

   
}