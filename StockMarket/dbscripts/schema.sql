-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema stock_market_charting
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema stock_market_charting
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `stock_market_charting` DEFAULT CHARACTER SET utf8 ;
USE `stock_market_charting` ;

-- -----------------------------------------------------
-- Table `stock_market_charting`.`board_of_directors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_charting`.`board_of_directors` (
  `bd_id` INT(11) NOT NULL AUTO_INCREMENT,
  `bd_cp_id` INT(11) NULL DEFAULT NULL,
  `bd_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`bd_id`),
  INDEX `FKhny5fv2negvjrg9ru57yqopii` (`bd_cp_id` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `stock_market_charting`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_charting`.`company` (
  `cp_id` INT(11) NOT NULL AUTO_INCREMENT,
  `cp_brief` VARCHAR(255) NOT NULL,
  `cp_ceo` VARCHAR(255) NOT NULL,
  `cp_code` BIGINT(20) NOT NULL,
  `cp_listed` TINYINT(4) NOT NULL,
  `cp_logo_url` VARCHAR(255) NULL DEFAULT NULL,
  `cp_name` VARCHAR(255) NOT NULL,
  `cp_turnover` BIGINT(20) NOT NULL,
  `cp_se_id` INT(11) NOT NULL,
  PRIMARY KEY (`cp_id`),
  INDEX `FK3xjn2wlvw3xbdp0j4bij9nvti` (`cp_se_id` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `stock_market_charting`.`company_stock`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_charting`.`company_stock` (
  `cs_cp_id` INT(11) NOT NULL,
  `cs_ex_id` INT(11) NOT NULL,
  PRIMARY KEY (`cs_cp_id`, `cs_ex_id`),
  INDEX `FKdfrr4mndjsguoy42occj83y5d` (`cs_ex_id` ASC))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `stock_market_charting`.`confirmation_token`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_charting`.`confirmation_token` (
  `token_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `confirmation_token` VARCHAR(255) NULL DEFAULT NULL,
  `created_date` DATETIME NULL DEFAULT NULL,
  `us_id` INT(11) NOT NULL,
  PRIMARY KEY (`token_id`),
  INDEX `FKnk9rmtvql9vwb9lc9cf8ly2d5` (`us_id` ASC))
ENGINE = MyISAM
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `stock_market_charting`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_charting`.`role` (
  `ro_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ro_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ro_id`))
ENGINE = MyISAM
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `stock_market_charting`.`sector`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_charting`.`sector` (
  `se_id` INT(11) NOT NULL AUTO_INCREMENT,
  `se_brief` VARCHAR(255) NOT NULL,
  `se_sector_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`se_id`))
ENGINE = MyISAM
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `stock_market_charting`.`stock_exchange`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_charting`.`stock_exchange` (
  `ex_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ex_address` VARCHAR(255) NOT NULL,
  `ex_brief` VARCHAR(255) NOT NULL,
  `ex_logo_url` VARCHAR(255) NULL DEFAULT NULL,
  `ex_remarks` VARCHAR(255) NOT NULL,
  `ex_stock_exchange` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ex_id`))
ENGINE = MyISAM
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `stock_market_charting`.`stock_price`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_charting`.`stock_price` (
  `sp_id` INT(11) NOT NULL AUTO_INCREMENT,
  `sp_company_code` BIGINT(20) NOT NULL,
  `sp_current_price` BIGINT(20) NOT NULL,
  `sp_date` DATETIME NOT NULL,
  `sp_stock_exchange` VARCHAR(255) NOT NULL,
  `sp_time` TIME NOT NULL,
  PRIMARY KEY (`sp_id`))
ENGINE = MyISAM
AUTO_INCREMENT = 19
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `stock_market_charting`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_charting`.`user` (
  `us_id` INT(11) NOT NULL AUTO_INCREMENT,
  `us_confirmed` TINYINT(4) NOT NULL,
  `us_email` VARCHAR(255) NOT NULL,
  `us_mobile_number` BIGINT(20) NOT NULL,
  `us_password` VARCHAR(255) NOT NULL,
  `us_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`us_id`))
ENGINE = MyISAM
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `stock_market_charting`.`users_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `stock_market_charting`.`user_role` (
  `ur_us_id` INT(11) NOT NULL,
  `ur_ro_id` INT(11) NOT NULL,
  PRIMARY KEY (`ur_us_id`, `ur_ro_id`),
  INDEX `FKknfbtnxnq8nxeaf1g6raofwaa` (`ur_ro_id` ASC))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8;


INSERT INTO `stock_market_charting`.`board_of_directors`
(`bd_id`,
`bd_name`,
`bd_cp_id`)
VALUES(1,"Nita Ambani",1),
(2,"Deepak Jain",1),
(3,"Michel",2),
(4,"Philip",2),
(5,"Vinayak",3),
(6,"Murali",3),
(7,"Gupta",4),
(8,"Dinesh Kumar",4),
(9,"Mallika",5),
(10,"Deepak kapoor",5),
(11,"Sailesh",6),
(12,"Vivek",6),
(13,"Velumani",7),
(14,"Sundararaju",7),
(15,"Shenoy",8),
(16,"Vishwanath",8);

INSERT INTO `stock_market_charting`.`sector`
(`se_id`,
`se_brief`,
`se_sector_name`)
VALUES
(1,"Finance and Healthcare Services", "Finance and Healthcare Services"),
(2,"Pharmaceuticals", "Pharmaceuticals"),
(3,"Hotels", "Hotels"),
(4,"Internet Software & Services", "Internet Software & Services");

INSERT INTO `stock_market_charting`.`company` (`cp_id`, `cp_brief`, `cp_ceo`, `cp_listed`, `cp_name`, `cp_turnover`, `cp_se_id`, `cp_logo_url`, `cp_code`) VALUES ('1', 'Good', 'MUKESH AMBANI', '1', 'RELIANCE', '845123697', '1', 'https://logosvector.net/wp-content/uploads/2013/05/reliance-industries-vector-logo.png', 1);
INSERT INTO `stock_market_charting`.`company` (`cp_id`, `cp_brief`, `cp_ceo`, `cp_listed`, `cp_name`, `cp_turnover`, `cp_se_id`, `cp_logo_url`, `cp_code`) VALUES ('2', 'Good', 'NARENDRA', '1', 'TATA STEEL', '150000454', '1', 'https://coacharya.com/wp-content/uploads/2017/09/tata-logo.png',2);
INSERT INTO `stock_market_charting`.`company` (`cp_id`, `cp_brief`, `cp_ceo`, `cp_listed`, `cp_name`, `cp_turnover`, `cp_se_id`, `cp_logo_url`, `cp_code`) VALUES ('3', 'Good', 'Pascal Soriot', '1', 'AstraZenaca', '145789634', '2', 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0002/9083/brand.gif?itok=kp_3qOII', 3);
INSERT INTO `stock_market_charting`.`company` (`cp_id`, `cp_brief`, `cp_ceo`, `cp_listed`, `cp_name`, `cp_turnover`, `cp_se_id`, `cp_logo_url`, `cp_code`) VALUES ('4', 'Good', 'Prathap Reddy', '1', 'Apollo Hospitals', '80000000', '3', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Apollo_Hospitals_Svg_Logo.svg/1200px-Apollo_Hospitals_Svg_Logo.svg.png', 4);
INSERT INTO `stock_market_charting`.`company` (`cp_id`, `cp_brief`, `cp_ceo`, `cp_listed`, `cp_name`, `cp_turnover`, `cp_se_id`, `cp_logo_url`, `cp_code`) VALUES ('5', 'Good', 'Arijit Basu', '1', 'State Bank Of India', '60000000', '2', 'https://qph.fs.quoracdn.net/main-qimg-2569681f342dd6c9319e2cab8920dbd2.webp', 5);
INSERT INTO `stock_market_charting`.`company` (`cp_id`, `cp_brief`, `cp_ceo`, `cp_listed`, `cp_name`, `cp_turnover`, `cp_se_id`, `cp_logo_url`, `cp_code`) VALUES ('6', 'Good', 'Dilip Shanghvi', '1', 'Sun Pharmaceuticals', '35000000', '2', 'https://upload.wikimedia.org/wikipedia/commons/2/26/Sun_Pharma_Logo.png', 6);
INSERT INTO `stock_market_charting`.`company` (`cp_id`, `cp_brief`, `cp_ceo`, `cp_listed`, `cp_name`, `cp_turnover`, `cp_se_id`, `cp_logo_url`, `cp_code`) VALUES ('7', 'Good', 'Arokiaswamy', '1', 'Thyrocare', '41258769', '3', 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/082016/untitled-1_206.jpg?itok=qwvpSggW', 7);
INSERT INTO `stock_market_charting`.`company` (`cp_id`, `cp_brief`, `cp_ceo`, `cp_listed`, `cp_name`, `cp_turnover`, `cp_se_id`, `cp_logo_url`, `cp_code`) VALUES ('8', 'Good', 'Padmaja', '1', 'Indian Bank', '25000000', '1', 'https://logosvector.net/wp-content/uploads/2014/01/indian-bank-1907-vector-logo.png', 8);

INSERT INTO `stock_market_charting`.`stock_exchange`
(`ex_id`,
`ex_address`,
`ex_brief`,
`ex_remarks`,
`ex_stock_exchange`,
`ex_logo_url`)
VALUES
(1,"Dalal Street, Mumbai", "Bombay Stock Exchange", "Good Service", "BSE", "https://logodix.com/logo/1724617.gif"), 
(2,"Dalal Street, Delhi", "National Stock Exchange", "Good Service", "NSE", "https://bsmedia.business-standard.com/_media/bs/img/misc/2018-08/08/full/nse-logo-1533719825-40642190.jpg"), 
(3,"Kolkata", "Calcutta Stock Exchange", "Good Service", "CSE", "https://3adeal.com/images/detailed/2/logo_wz1w-ak.jpg?t=1493725972");


INSERT INTO `stock_market_charting`.`company_stock` (`cs_cp_id`, `cs_ex_id`) VALUES ('1', '1');
INSERT INTO `stock_market_charting`.`company_stock` (`cs_cp_id`, `cs_ex_id`) VALUES ('1', '2');
INSERT INTO `stock_market_charting`.`company_stock` (`cs_cp_id`, `cs_ex_id`) VALUES ('2', '2');
INSERT INTO `stock_market_charting`.`company_stock` (`cs_cp_id`, `cs_ex_id`) VALUES ('3', '1');
INSERT INTO `stock_market_charting`.`company_stock` (`cs_cp_id`, `cs_ex_id`) VALUES ('4', '3');
INSERT INTO `stock_market_charting`.`company_stock` (`cs_cp_id`, `cs_ex_id`) VALUES ('5', '3');
INSERT INTO `stock_market_charting`.`company_stock` (`cs_cp_id`, `cs_ex_id`) VALUES ('6', '1');
INSERT INTO `stock_market_charting`.`company_stock` (`cs_cp_id`, `cs_ex_id`) VALUES ('7', '3');
INSERT INTO `stock_market_charting`.`company_stock` (`cs_cp_id`, `cs_ex_id`) VALUES ('8', '2');

INSERT INTO `stock_market_charting`.`role`
(`ro_id`,`ro_name`)
VALUES
(1,"ROLE_USER"),(2,"ROLE_ADMIN");

INSERT INTO `stock_market_charting`.`user`
(`us_id`,
`us_confirmed`,
`us_email`,
`us_mobile_number`,
`us_password`,
`us_name`)
VALUES
(1,1,"dhanush1197@gmail.com",9940587270, '$2a$10$dlpdjwTtfaVXzivllw/oPOui4H0WG7ZI5hXVc7AQsISscs8yNLFnO', 'admin'),
(2,1,"dhanush1197@gmail.com",9940587270, '$2a$10$dlpdjwTtfaVXzivllw/oPOui4H0WG7ZI5hXVc7AQsISscs8yNLFnO', 'test');

INSERT INTO `stock_market_charting`.`user_role`
(`ur_us_id`,
`ur_ro_id`)
VALUES
(1,2),(2,1);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
