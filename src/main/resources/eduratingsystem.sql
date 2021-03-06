/*
Navicat MySQL Data Transfer

Source Server         : GeoLab
Source Server Version : 50625
Source Host           : localhost:3306
Source Database       : eduratingsystem

Target Server Type    : MYSQL
Target Server Version : 50625
File Encoding         : 65001

Date: 2015-12-19 08:27:28
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `answers`
-- ----------------------------
DROP TABLE IF EXISTS `answers`;
CREATE TABLE `answers` (
  `ANSWER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `QUESTION_ID` int(11) NOT NULL,
  `ANSWER` varchar(4096) NOT NULL,
  `IS_CORRECT` int(11) NOT NULL,
  `STATE` int(11) NOT NULL,
  PRIMARY KEY (`ANSWER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of answers
-- ----------------------------
INSERT INTO `answers` VALUES ('1', '1', '1900', '0', '1');
INSERT INTO `answers` VALUES ('2', '1', '1915', '0', '1');
INSERT INTO `answers` VALUES ('3', '1', '1918', '1', '1');
INSERT INTO `answers` VALUES ('4', '1', '1995', '0', '1');
INSERT INTO `answers` VALUES ('5', '2', 'ივანე ჯავახიშვილი', '0', '1');
INSERT INTO `answers` VALUES ('6', '2', 'დიმიტრი უზნაძე', '0', '1');
INSERT INTO `answers` VALUES ('7', '2', 'ილია ვეკუა', '0', '1');
INSERT INTO `answers` VALUES ('8', '2', 'პეტრე მელიქიშვილი', '1', '1');
INSERT INTO `answers` VALUES ('9', '3', '1911', '0', '1');
INSERT INTO `answers` VALUES ('10', '3', '1918', '0', '1');
INSERT INTO `answers` VALUES ('11', '3', '1925', '0', '1');
INSERT INTO `answers` VALUES ('12', '3', '1995', '1', '1');

-- ----------------------------
-- Table structure for `categories`
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `CATEGORY_ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(512) NOT NULL,
  `STATE` int(11) NOT NULL,
  PRIMARY KEY (`CATEGORY_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES ('1', 'ბიურიკრატია', '1');
INSERT INTO `categories` VALUES ('2', 'ადმინისტრაცია', '1');
INSERT INTO `categories` VALUES ('3', 'სწავლება', '1');

-- ----------------------------
-- Table structure for `questions`
-- ----------------------------
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `QUESTION_ID` int(11) NOT NULL AUTO_INCREMENT,
  `QUESTION` varchar(4096) NOT NULL,
  `GRADE` double(11,4) NOT NULL,
  `STATE` int(11) NOT NULL,
  PRIMARY KEY (`QUESTION_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of questions
-- ----------------------------
INSERT INTO `questions` VALUES ('1', 'რომელ წელს დაარსდა თბილისის სახელმწიფო უნვიერსიტეტი', '1.0000', '1');
INSERT INTO `questions` VALUES ('2', 'ვინ იყო თბილისის სახელმწიფო უნივერსიტეტის პირველი რექტორი', '2.0000', '1');
INSERT INTO `questions` VALUES ('3', 'რომელი წლის კონსტიტუციით ხელმძღვანელობს საქართველო', '3.0000', '1');

-- ----------------------------
-- Table structure for `ratings`
-- ----------------------------
DROP TABLE IF EXISTS `ratings`;
CREATE TABLE `ratings` (
  `RATING_ID` int(11) NOT NULL AUTO_INCREMENT,
  `UNIVERSITY_` int(11) NOT NULL,
  `SPECIALITY_ID` int(11) NOT NULL,
  `CATEGORY_ID` int(11) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  `GRADE` double(11,4) NOT NULL,
  PRIMARY KEY (`RATING_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ratings
-- ----------------------------

-- ----------------------------
-- Table structure for `specialities`
-- ----------------------------
DROP TABLE IF EXISTS `specialities`;
CREATE TABLE `specialities` (
  `SPECIALITY_ID` int(11) NOT NULL AUTO_INCREMENT,
  `UNIVERSITY_ID` int(11) NOT NULL,
  `NAME` varchar(1024) NOT NULL,
  `STATE` int(11) NOT NULL,
  PRIMARY KEY (`SPECIALITY_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of specialities
-- ----------------------------

-- ----------------------------
-- Table structure for `universities`
-- ----------------------------
DROP TABLE IF EXISTS `universities`;
CREATE TABLE `universities` (
  `UNIVERSITY_ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(512) NOT NULL,
  `STATE` int(11) NOT NULL,
  PRIMARY KEY (`UNIVERSITY_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of universities
-- ----------------------------
INSERT INTO `universities` VALUES ('1', 'თბილისის სახელმწიფო უნივერსიტეტი', '1');
INSERT INTO `universities` VALUES ('2', 'აგრარული უნივერსიტეტი', '1');
INSERT INTO `universities` VALUES ('3', 'თავისუფალი უნივერსიტეტი', '1');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `USER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `USERNAME` varchar(255) NOT NULL,
  `PASSWORD` varchar(255) NOT NULL,
  `COEFICIENT` float(11,4) DEFAULT NULL,
  `SCORE_IN_TEST` float(11,4) DEFAULT NULL,
  `STATE` int(11) NOT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'test', 'test', '1.0000', '1.0000', '1');
