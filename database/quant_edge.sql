/*
Navicat MySQL Data Transfer

Source Server         : Test
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : quant_edge

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-05-31 22:00:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for data
-- ----------------------------
DROP TABLE IF EXISTS `data`;
CREATE TABLE `data` (
  `id` int(3) NOT NULL,
  `code` text NOT NULL,
  `company` text NOT NULL,
  `price` float(8,2) NOT NULL,
  `volume` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of data
-- ----------------------------
INSERT INTO `data` VALUES ('0', 'CBA.AX', 'NATION AUSTRALIA BANK LIMITED', '80.21', '10245');
INSERT INTO `data` VALUES ('1', 'SRX.AX', 'SIRTEX MEDICAL LIMITED', '70.58', '2134');
INSERT INTO `data` VALUES ('2', 'ANZ.AX', 'AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED', '20.14', '964128');
INSERT INTO `data` VALUES ('3', 'BHP.AX', 'BHP BILLITON LIMITED', '14.50', '2874');
INSERT INTO `data` VALUES ('4', 'WBC.AX', 'WESTPAC BANKING CORPORATION', '87.20', '98752');
INSERT INTO `data` VALUES ('5', 'NAB.AX', 'NATIONA AUSTRALIA BANK LIMITED', '11.50', '3645');
INSERT INTO `data` VALUES ('6', 'MQG.AX', 'MACQUARIE GROUP LIMITED', '64.30', '2254');
INSERT INTO `data` VALUES ('7', 'QBE.AX', 'QBE INSURANCE GROUP LIMITED', '21.80', '69214');
INSERT INTO `data` VALUES ('8', 'RIO.AX', 'RIO TINTO LIMITED', '35.70', '241063');
INSERT INTO `data` VALUES ('9', 'WES.AX', 'WESFARMERS LIMITED', '33.50', '98741');
INSERT INTO `data` VALUES ('10', 'CSL.AX', 'CSL LIMITED', '87.40', '8763');
INSERT INTO `data` VALUES ('11', 'FMG.AX', 'FORTESCUE METALS GROUP LTD', '65.90', '22874');
INSERT INTO `data` VALUES ('12', 'TLS.AX', 'TELSTRA CORPORATION LIMITED', '71.50', '85314');
INSERT INTO `data` VALUES ('13', 'CWN.AX', 'CROWN RESORTS LIMITED', '42.80', '9674');
