-- MySQL dump 10.13  Distrib 8.0.37, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: xrrs
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `xrrs_admin`
--

DROP TABLE IF EXISTS `xrrs_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xrrs_admin` (
  `admin_id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `admin_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户名',
  `admin_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码',
  `admin_is_henau` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0' COMMENT '是否为河南农大学生教职工',
  `admin_openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '0' COMMENT '微信openid',
  `admin_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '0' COMMENT '手机号',
  `admin_henau` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '0' COMMENT '学号',
  `admin_is_super` int DEFAULT '0' COMMENT '是否为超级管理员',
  `admin_section` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '0' COMMENT '部门',
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='管理员表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xrrs_admin`
--

/*!40000 ALTER TABLE `xrrs_admin` DISABLE KEYS */;
INSERT INTO `xrrs_admin` VALUES (1,'admin','admin@Henau','0','0','0','0',0,'0');
/*!40000 ALTER TABLE `xrrs_admin` ENABLE KEYS */;

--
-- Table structure for table `xrrs_damage_types`
--

DROP TABLE IF EXISTS `xrrs_damage_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xrrs_damage_types` (
  `damage_type_id` int NOT NULL AUTO_INCREMENT,
  `damage_type_name` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`damage_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10010 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='报修类型索引表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xrrs_damage_types`
--

/*!40000 ALTER TABLE `xrrs_damage_types` DISABLE KEYS */;
INSERT INTO `xrrs_damage_types` VALUES (0,'其他'),(1,'电路故障'),(2,'水管故障'),(3,'网络故障'),(4,'宽带网络故障');
/*!40000 ALTER TABLE `xrrs_damage_types` ENABLE KEYS */;

--
-- Table structure for table `xrrs_final_locations`
--

DROP TABLE IF EXISTS `xrrs_final_locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xrrs_final_locations` (
  `final_location_id` int NOT NULL AUTO_INCREMENT,
  `final_location_name` varchar(16) DEFAULT NULL,
  `two_location_id` int NOT NULL,
  `two_location_name` varchar(16) NOT NULL,
  `one_location_id` int NOT NULL,
  `one_location_name` varchar(16) NOT NULL,
  PRIMARY KEY (`final_location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='全部建筑地点表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xrrs_final_locations`
--

/*!40000 ALTER TABLE `xrrs_final_locations` DISABLE KEYS */;
INSERT INTO `xrrs_final_locations` VALUES (1,'其他',11,'其他',1,'许昌校区A栋教学楼'),(2,'其他',1,'一楼',1,'许昌校区A栋教学楼'),(3,'101教室',1,'一楼',1,'许昌校区A栋教学楼'),(4,'102教室',1,'一楼',1,'许昌校区A栋教学楼'),(5,'103教室',1,'一楼',1,'许昌校区A栋教学楼'),(6,'104教室',1,'一楼',1,'许昌校区A栋教学楼'),(7,'105教室',1,'一楼',1,'许昌校区A栋教学楼'),(8,'其他',14,'其他',8,'其他'),(13,'106教室',1,'一楼',1,'许昌校区A栋教学楼'),(14,'107教室',1,'一楼',1,'许昌校区A栋教学楼'),(15,'108教室',1,'一楼',1,'许昌校区A栋教学楼'),(17,'201教室',2,'二楼',1,'许昌校区A栋教学楼'),(18,'202教室',2,'二楼',1,'许昌校区A栋教学楼'),(19,'301教室',3,'三楼',1,'许昌校区A栋教学楼'),(20,'302教室',3,'三楼',1,'许昌校区A栋教学楼'),(21,'303教室',3,'三楼',1,'许昌校区A栋教学楼'),(22,'109教室',1,'一楼',1,'许昌校区A栋教学楼'),(23,'203教室',2,'二楼',1,'许昌校区A栋教学楼'),(24,'204教室',2,'二楼',1,'许昌校区A栋教学楼'),(25,'205教室',2,'二楼',1,'许昌校区A栋教学楼'),(26,'206教室',2,'二楼',1,'许昌校区A栋教学楼'),(27,'207教室',2,'二楼',1,'许昌校区A栋教学楼'),(28,'208教室',2,'二楼',1,'许昌校区A栋教学楼'),(29,'209教室',2,'二楼',1,'许昌校区A栋教学楼'),(30,'其他',2,'二楼',1,'许昌校区A栋教学楼'),(31,'303教室',3,'三楼',1,'许昌校区A栋教学楼'),(32,'304教室',3,'三楼',1,'许昌校区A栋教学楼'),(33,'305教室',3,'三楼',1,'许昌校区A栋教学楼'),(34,'306教室',3,'三楼',1,'许昌校区A栋教学楼'),(35,'307教室',3,'三楼',1,'许昌校区A栋教学楼'),(36,'308教室',3,'三楼',1,'许昌校区A栋教学楼'),(37,'309教室',3,'三楼',1,'许昌校区A栋教学楼'),(38,'其他',3,'三楼',1,'许昌校区A栋教学楼');
/*!40000 ALTER TABLE `xrrs_final_locations` ENABLE KEYS */;

--
-- Table structure for table `xrrs_one_locations`
--

DROP TABLE IF EXISTS `xrrs_one_locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xrrs_one_locations` (
  `one_location_id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `one_location_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `campus` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '校区',
  PRIMARY KEY (`one_location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xrrs_one_locations`
--

/*!40000 ALTER TABLE `xrrs_one_locations` DISABLE KEYS */;
INSERT INTO `xrrs_one_locations` VALUES (1,'许昌校区A栋教学楼','许昌校区'),(2,'许昌校区B栋教学楼','许昌校区'),(3,'许昌校区C栋教学楼','许昌校区'),(4,'许昌校区一号餐厅','许昌校区'),(5,'许昌校区A栋宿舍楼','许昌校区'),(6,'许昌校区B栋宿舍楼','许昌校区'),(7,'许昌校区C栋宿舍楼','许昌校区'),(8,'其他','许昌校区');
/*!40000 ALTER TABLE `xrrs_one_locations` ENABLE KEYS */;

--
-- Temporary view structure for view `xrrs_order_summary`
--

DROP TABLE IF EXISTS `xrrs_order_summary`;
/*!50001 DROP VIEW IF EXISTS `xrrs_order_summary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `xrrs_order_summary` AS SELECT 
 1 AS `order_date`,
 1 AS `total_orders`,
 1 AS `damage_type_id`,
 1 AS `damaged_orders_of_type`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `xrrs_order_user_info`
--

DROP TABLE IF EXISTS `xrrs_order_user_info`;
/*!50001 DROP VIEW IF EXISTS `xrrs_order_user_info`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `xrrs_order_user_info` AS SELECT 
 1 AS `order_id`,
 1 AS `user_id`,
 1 AS `user_name`,
 1 AS `user_henau_number`,
 1 AS `user_section`,
 1 AS `user_phone`,
 1 AS `final_location_id`,
 1 AS `damage_type_id`,
 1 AS `damage_details`,
 1 AS `order_is_repaired`,
 1 AS `order_update_time`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `xrrs_orders`
--

DROP TABLE IF EXISTS `xrrs_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xrrs_orders` (
  `order_id` int NOT NULL AUTO_INCREMENT COMMENT '订单ID',
  `user_id` int NOT NULL COMMENT '用户ID',
  `final_location_id` int NOT NULL COMMENT '最终地点ID',
  `damage_type_id` int NOT NULL COMMENT '损坏类型ID',
  `damage_details` varchar(2000) NOT NULL COMMENT '损坏详细信息',
  `order_is_repaired` int NOT NULL COMMENT '是否被修复',
  `order_update_time` datetime NOT NULL COMMENT '订单更新时间',
  `order_is_public` int NOT NULL COMMENT '是否公开',
  `one_location_id` int NOT NULL COMMENT '一级地点ID',
  `two_location_id` int NOT NULL COMMENT '二级地点ID',
  `one_location_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '一级地点名称',
  `two_location_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '二级地点名称',
  `final_location_name` varchar(100) DEFAULT NULL COMMENT '最终地点名称',
  `damage_type_name` varchar(100) DEFAULT NULL COMMENT '故障类型',
  `order_completed_time` datetime DEFAULT NULL COMMENT '订单完成时间',
  `worker_id` int DEFAULT NULL COMMENT '工人ID',
  `order_is_deleted` int NOT NULL DEFAULT '0' COMMENT '是否被删除',
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xrrs_orders`
--

/*!40000 ALTER TABLE `xrrs_orders` DISABLE KEYS */;
INSERT INTO `xrrs_orders` VALUES (65,2,3,2,'多媒体故障',1,'2024-04-09 20:58:01',1,1,1,'许昌校区A栋教学楼','一楼','101教室','水管故障','2024-07-02 15:19:55',NULL,0),(66,2,5,1,'未知故障',0,'2024-04-09 23:04:25',1,1,1,'许昌校区A栋教学楼','一楼','103教室','电路故障',NULL,NULL,1),(67,2,6,3,'asdghgfhjwdagbhjerbhjklhjklvdgvdfcbdfbihjgurdfhuifgfdgfdgdfg',0,'2024-04-09 23:07:23',1,1,1,'许昌校区A栋教学楼','一楼','104教室','校园网络故障',NULL,NULL,1),(68,2,4,2,'从展人包白每查精什层作以太。色北铁由厂己存该节做感际西设克。流公体观行党该青格出造农许叫始角研。打置写小日识关长没低量统信。',1,'2024-04-09 23:26:42',1,1,1,'许昌校区A栋教学楼','一楼','102教室','水管故障','2024-07-02 15:19:54',NULL,0),(69,2,3,3,'法机专话小天两流还度越两局调。论积真斗义被好西类儿主心研。青品构有马入但题作府为各物导能打被。布时再代路立此去别百科学应构收。省广始意后养用火只次权线油当。七气路问克采机级节所那层处。',1,'2024-04-09 23:27:55',1,1,1,'许昌校区A栋教学楼','一楼','101教室','校园网络故障','2024-07-02 15:19:54',NULL,0),(70,2,1,2,'家总两约色识由必以色布下走展么素重。体式和种展金效毛军资进内七重型。些采可学合的际确型划程龙低证。',0,'2024-04-09 23:27:56',1,1,0,'许昌校区A栋教学楼','其他','其他','水管故障',NULL,NULL,1),(71,2,6,3,'长圆全边工许人位里还教术民必进。全上然比矿反并确九本东总家。历许动率部并安大通象步条。受马影只省开员群分周常约存处。',1,'2024-04-09 23:27:57',1,1,1,'许昌校区A栋教学楼','一楼','104教室','校园网络故障','2024-07-02 15:19:54',NULL,0),(72,2,2,3,'收具县例是认土间完般积头候响。样表日门头又把们完很光导听海但山。是小段铁得能院整数那光节导一多员。思指数将复受酸理他量门利研里报包。斯才养成断究可处就流合平活。',1,'2024-04-10 00:07:19',1,1,1,'许昌校区A栋教学楼','一楼','其他','校园网络故障','2024-07-02 15:19:53',NULL,0),(73,2,34,4,'除斯示转而更报车京省集增达于。代制通何片写空复万眼总支形被图影式后。已现第示力处适五市构人音带支资机置厂。场史今内研使边变家原用始美形军真合。小在金石美平开本里物思可强本亲写热去。历成便只王往计张要作专商流。',1,'2024-04-10 00:07:20',1,1,3,'许昌校区A栋教学楼','三楼','306教室','移动宽带网络故障','2024-04-20 21:23:54',NULL,0),(74,2,1,4,'响战山交许身合三点论现入选头。专般议许省厂会周使革说包存。毛查向速火非通元广结八界变府完实间。太正才志因南我回位类主造这求许。政般米存题价权九先山七以明条阶安管。县很领他构究将些且对题电华象料理。',1,'2024-04-10 00:07:27',0,1,11,'许昌校区A栋教学楼','其他','其他','移动宽带网络故障','2024-07-02 15:19:53',NULL,0),(75,2,5,0,'这是一段测试信息',1,'2024-04-10 22:39:24',0,1,1,'许昌校区A栋教学楼','一楼','103教室','其他','2024-07-02 15:19:52',NULL,0),(76,2,3,3,'rgyfdbghfbuod',1,'2024-04-12 09:01:16',1,1,1,'许昌校区A栋教学楼','一楼','101教室','校园网络故障','2024-07-02 15:19:52',NULL,0),(78,2,19,0,'4554315223',1,'2024-04-13 22:25:20',1,1,3,'许昌校区A栋教学楼','三楼','301教室','其他','2024-07-02 15:19:51',NULL,0),(79,2,28,3,'11111111111',1,'2024-04-17 10:46:51',1,1,2,'许昌校区A栋教学楼','二楼','208教室','校园网络故障','2024-04-20 21:20:09',1,0),(80,2,5,3,'质军大县达到众收反水国元农响酸二提。查克增建候间关需点程龙什算价节确他支。众导格没当资向义直火专果亲维特社。单明又电个月段达次设为可。龙强火式众世流合专话越器。',0,'2024-04-21 00:46:59',0,1,1,'许昌校区A栋教学楼','一楼','103教室','校园网络故障','2024-04-21 00:46:59',1,0),(81,2,1,2,'场近几名定斗信家造团王儿设拉划各状。流圆世资较那代广现在己采义人成金织。亲二叫单者变始且开装采无收。色提先将规精做但及王回本省想近清这。道军适自者车值常节四三需治情织。',0,'2024-04-21 00:47:01',0,1,11,'许昌校区A栋教学楼','其他','其他','水管故障','2024-04-21 00:47:01',1,0),(82,2,3,2,'计西思状六空厂军流复验等变才。但增展增向山代转矿力十和团管小按从。办采果九复况那越金比认清心料生权。物就所的度体导半别提表大团龙联科。力目色热温证外任采位易省响区加者马方。',0,'2024-04-21 00:47:02',0,1,1,'许昌校区A栋教学楼','一楼','101教室','水管故障','2024-04-21 00:47:02',1,0),(83,2,3,2,'能花精并带场受合次清划门角面何变们。强必织记色己农更几取员办感。片时省高信常头给之里业给知。造党管家共些包切她她光术这人为。',0,'2024-04-21 00:47:03',0,1,1,'许昌校区A栋教学楼','一楼','101教室','水管故障','2024-04-21 00:47:03',1,0),(84,2,3,3,'五变电满周子以山新白相向火易本。阶行处始革加好南或采意规近值你。劳备表处过严关速状速但石决儿。间史越他四统科拉行步切这场织它。',1,'2024-04-21 00:47:05',0,1,1,'许昌校区A栋教学楼','一楼','101教室','校园网络故障','2024-04-21 11:32:54',1,0),(85,2,5,2,'本值调明感白而原克看部米料今全。低东各难东支整温增人部示听素通。上合儿需组引斗然油们代将数器十治除行。越总开分便现保马音带斯等来于求断。育此积些委史较才各部些把定。地间红场能局为能存指处称照连广。太治设之一研复亲们心断证影团头成布定。',0,'2024-04-21 00:47:06',0,1,1,'许昌校区A栋教学楼','一楼','103教室','水管故障','2024-04-21 00:47:06',1,0),(86,2,4,3,'海军史里种音会素许利这何消。只把最指回做们深空斗市层养证过第需二。分美阶许目线它去场于按族对。再集商结光下至美去点反严层生。始需选或于治很装国织东段。算下身内叫中容种政列需调近。',1,'2024-04-21 00:47:07',0,1,1,'许昌校区A栋教学楼','一楼','102教室','校园网络故障','2024-04-21 11:32:53',1,0),(87,2,4,4,'放元面明史开克学定红始节是越则存转都。且常走正身那后引率道大各利效。很务指验进己世其队己运半属群等点象电。直得青式状应天金号队问铁。',0,'2024-04-21 00:47:12',0,1,1,'许昌校区A栋教学楼','一楼','102教室','移动宽带网络故障','2024-04-21 00:47:12',1,0),(88,2,7,4,'着度法重认深新影头较复被海叫。住计一六形打不然真离月却样。准识用各变出增今真满及党整家形。类二是重后小养建复此具二元。马片学电市看特整是并此八热五还保得。记步不而件广深自事容处群。办系情张市它治张将矿思除用族。',1,'2024-04-21 00:47:47',0,1,1,'许昌校区A栋教学楼','一楼','105教室','移动宽带网络故障','2024-04-21 11:32:52',1,0),(89,2,24,3,'算儿体白先共民等参识光万常。把容四时般者众制劳派认命次状在区正种。共反表花电再离造学调头素门增家划。议去地认半示步叫路例江织口家。',0,'2024-04-21 00:47:48',0,1,2,'许昌校区A栋教学楼','二楼','204教室','校园网络故障','2024-04-21 00:47:48',1,0),(90,2,17,2,'接消有角装住下其金民为六石代火研却。要也也品线在自置理四图花色斗了。往种确包立百展商月名花着口进。行消系管真史办号青常众出自广。',1,'2024-04-21 00:47:49',0,1,2,'许昌校区A栋教学楼','二楼','201教室','水管故障','2024-04-21 11:32:51',1,0),(91,2,8,2,'选才想按断而火不现铁关克厂验般构。包该感件头结持上律为值相声满量王越都。里金第劳候造关结切王难其理土每议。快社己上中等放又多改月火节林气有。半权实复品手除接认水毛又向所选化。',0,'2024-04-21 00:47:55',1,8,14,'其他','其他','其他','水管故障','2024-04-21 00:47:55',1,0),(92,2,28,2,'上点与因族命今世明况展起结西。两拉不济南信便育带地把算保议查际技。质我收证他展了传长反联社育之持长适。则住得改又场历适好更太始识节群。',0,'2024-04-21 00:47:56',1,1,2,'许昌校区A栋教学楼','二楼','208教室','水管故障','2024-04-21 00:47:56',1,0),(93,2,5,2,'常自下一细色节之办后常角图系单风成。价团较几或持正目角才改变子子向。须理及带专易决酸此状信求或。县二干情持龙温地维的近种便质已。院所来温矿向战装改劳相很识。',0,'2024-04-21 00:47:57',0,1,1,'许昌校区A栋教学楼','一楼','103教室','水管故障','2024-04-21 00:47:57',1,0),(94,2,2,2,'级响众相事你儿目队为备照。多制马道保压起验改段美第。叫连龙青回米红总少很西山值着公自济。满现年特外百只身南至现太天每。又万越压路只近则革大那界。区第素目如即原育然将海头好满却引给。',0,'2024-04-21 00:47:59',0,1,1,'许昌校区A栋教学楼','一楼','其他','水管故障','2024-07-02 14:06:54',1,0),(95,2,19,3,'备造史心活走那政龙看传做口。集空统响大反养且工石产不置合际。习革构比路王管明细问识自运消。',0,'2024-04-21 00:48:40',0,1,3,'许昌校区A栋教学楼','三楼','301教室','校园网络故障','2024-04-21 00:48:40',1,0),(96,2,15,2,'用这非果界新济压交共位需管积京那。但长过已称几路始图团到无亲见等。们义节指后并过开院金业更出才利。整建听下土身场里列且把后多色可向。例列速示切达强时除其指些连且九。',1,'2024-04-21 00:48:42',0,1,1,'许昌校区A栋教学楼','一楼','108教室','水管故障','2024-04-21 01:11:30',1,0),(97,2,5,1,'程层增光日军手如得着矿还号争声十。证提它据战容商务快便共教金。争统对的通由快存消物飞组织海也联。特难代什平表采为论节没制。',1,'2024-04-21 00:48:43',1,1,1,'许昌校区A栋教学楼','一楼','103教室','电路故障','2024-04-21 01:11:28',1,0),(98,2,23,2,'半例又情心它再条飞铁东老离也省四。心料去列拉参一风正无委象写。动此电求存边明越正三历革带产经按。写象发必这才心算元处该越行查平要重。亲西例决至除府二自资局叫史。表住府三这员商而长效接较从得而制应。',0,'2024-04-21 00:48:44',0,1,2,'许昌校区A栋教学楼','二楼','203教室','水管故障','2024-04-21 01:11:28',1,0),(99,2,19,2,'效际象千史机县上段白并意上受手及候起。很养志这类眼从较利确车矿消土各步程复。社据军去本斯南保次程七当红难保那九。金料可给史石产极今为到示再开太。发开其心速确济口书主离转需说。再们按育今器什况期次影打深。',1,'2024-04-21 00:48:46',0,1,3,'许昌校区A栋教学楼','三楼','301教室','水管故障','2024-04-21 01:11:28',1,0),(100,2,26,1,'去况毛片阶资起且必分展结书算是区标。交状给类些花千部车里华制格单管集共。报青强立及思且精联也一阶究手体说。眼干然实着必意由矿因四满识但程。',1,'2024-04-21 00:48:47',1,1,2,'许昌校区A栋教学楼','二楼','206教室','电路故障','2024-04-21 10:29:13',1,0),(101,2,15,4,'展适制发参交去决各就却重济。工工指龙加育平常接本装它自。上极国那专列器型北东算争规许。间但效权运七文消斗江中些书。',0,'2024-04-21 00:48:48',0,1,1,'许昌校区A栋教学楼','一楼','108教室','移动宽带网络故障','2024-04-21 11:32:41',1,0),(102,2,13,1,'观那厂内国油具空来连便委都土。位流温研观联时他养线清边场叫干增计。太问达国文由装自里着明运。',1,'2024-04-21 00:48:50',1,1,1,'许昌校区A栋教学楼','一楼','106教室','电路故障','2024-04-25 13:05:05',1,0),(103,2,18,3,'级少深院东构识感手统酸线段写低会区。查圆世书才相正离这派东变个什员北军。今外铁种要白文前图矿说还压物养速。消己收却应装解由天研支关量交京。看九种省群管复军将强期反入示亲区省组。门教片西即利党将写克为厂千具劳明。去目出你片快确接老增然务音海斗相件。',0,'2024-04-21 00:48:51',1,1,2,'许昌校区A栋教学楼','二楼','202教室','校园网络故障','2024-04-21 01:42:58',1,0),(104,2,2,2,'他料起北温术众按调带处火须热强称于众。内政前之社这团个路强道毛新南应料般文。指史身斗人小内而电华于种关。管专法号根这心并利历例况。专原下状单农学组上九际求直活。按织始研九规习工快图劳非管特备步使消。',0,'2024-04-21 00:48:52',0,1,1,'许昌校区A栋教学楼','一楼','其他','水管故障','2024-04-21 01:26:15',1,0),(105,2,29,3,'并取在包子你量作料管织市群五本器并。派标红县领受别断极类最专或离器民。军中我社完通便系被新争极油周他使求。证儿人书快数影起运划备金。真王素她平科专定也长装低至界比。经计达得反风各打许育前规保权原。象得知元当道则从运放话示目。',1,'2024-04-21 00:48:53',1,1,2,'许昌校区A栋教学楼','二楼','209教室','校园网络故障','2024-04-21 01:13:36',1,0),(106,2,27,4,'共儿性务四他或前时面直百表。集往满真总少只者意但治气经细复即。还外整京矿',0,'2024-04-21 00:48:55',1,1,2,'许昌校区A栋教学楼','二楼','207教室','移动宽带网络故障','2024-05-23 10:53:53',1,0),(107,2,6,3,'为划放包己先向起那而天积解油素能。质打和品却影改油义战断应色细采。性油温体展期段放战高断平式反车程。价保的党导处料素广标路代压。面由然体造铁系什律亲战议花。',0,'2024-04-21 00:48:56',0,1,1,'许昌校区A栋教学楼','一楼','104教室','校园网络故障','2024-06-26 11:32:32',1,1),(108,2,2,0,'!!!',1,'2024-06-26 12:57:34',0,1,1,'许昌校区A栋教学楼','一楼','其他','其他','2024-06-26 12:58:17',1,1),(109,2,3,1,'AAAA',1,'2024-07-03 17:06:58',0,1,1,'许昌校区A栋教学楼','一楼','101教室','电路故障','2024-07-03 20:23:32',1,0),(110,2,2,0,'AAA',1,'2024-07-03 17:07:32',0,1,1,'许昌校区A栋教学楼','一楼','其他','其他','2024-07-03 20:23:31',1,0),(111,2,2,0,'AAA',0,'2024-07-03 17:08:13',0,1,1,'许昌校区A栋教学楼','一楼','其他','其他','2024-07-03 17:08:13',1,1),(112,2,18,1,'AAA',1,'2024-07-03 17:09:47',0,1,2,'许昌校区A栋教学楼','二楼','202教室','电路故障','2024-07-03 20:23:30',1,0),(113,2,17,1,'AAA',0,'2024-07-03 17:10:27',1,1,2,'许昌校区A栋教学楼','二楼','201教室','电路故障','2024-07-03 17:10:27',1,1),(114,2,3,0,'dsafds',0,'2024-07-03 17:12:22',0,1,1,'许昌校区A栋教学楼','一楼','101教室','其他','2024-07-03 17:12:22',1,1),(115,2,24,1,'dfsgf',1,'2024-07-03 17:13:45',0,1,2,'许昌校区A栋教学楼','二楼','204教室','电路故障','2024-07-03 20:23:30',1,0),(116,2,24,1,'dfsgf',0,'2024-07-03 17:14:36',0,1,2,'许昌校区A栋教学楼','二楼','204教室','电路故障','2024-07-03 17:14:36',1,1),(117,2,24,1,'dfsgf',0,'2024-07-03 17:15:17',1,1,2,'许昌校区A栋教学楼','二楼','204教室','电路故障','2024-07-03 20:23:30',1,0),(118,2,4,1,'asdvfv',0,'2024-07-03 17:17:12',1,1,1,'许昌校区A栋教学楼','一楼','102教室','电路故障','2024-07-03 20:23:34',1,0),(119,2,26,0,'sadas',0,'2024-07-03 17:23:54',1,1,2,'许昌校区A栋教学楼','二楼','206教室','其他','2024-07-03 17:23:54',1,1),(120,2,17,0,'测试',0,'2024-07-03 18:51:36',0,1,2,'许昌校区A栋教学楼','二楼','201教室','其他','2024-07-03 18:51:36',1,1),(121,2,21,1,'fghh',0,'2024-07-03 18:57:13',1,1,3,'许昌校区A栋教学楼','三楼','303教室','电路故障','2024-07-03 18:57:13',1,1);
/*!40000 ALTER TABLE `xrrs_orders` ENABLE KEYS */;

--
-- Table structure for table `xrrs_two_locations`
--

DROP TABLE IF EXISTS `xrrs_two_locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xrrs_two_locations` (
  `two_location_id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `two_location_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `one_location_id` int DEFAULT NULL,
  PRIMARY KEY (`two_location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xrrs_two_locations`
--

/*!40000 ALTER TABLE `xrrs_two_locations` DISABLE KEYS */;
INSERT INTO `xrrs_two_locations` VALUES (1,'一楼',1),(2,'二楼',1),(3,'三楼',1),(4,'四楼',1),(6,'二楼',2),(7,'三楼',2),(8,'四楼',2),(9,'五楼',2),(10,'一楼',3),(11,'其他',1),(12,'其他',2),(13,'其他',3),(14,'其他',8),(24,'一楼',2);
/*!40000 ALTER TABLE `xrrs_two_locations` ENABLE KEYS */;

--
-- Table structure for table `xrrs_user`
--

DROP TABLE IF EXISTS `xrrs_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xrrs_user` (
  `user_id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `user_orders_number` int NOT NULL DEFAULT '0',
  `user_openid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_henau_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_section` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '用户所在学院',
  `user_phone` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '手机号',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xrrs_user`
--

/*!40000 ALTER TABLE `xrrs_user` DISABLE KEYS */;
INSERT INTO `xrrs_user` VALUES (2,0,'995b13e72ffedd1cbf8dd6e93e6ab519','测试用户','123456','信息化办公室','13200000001');
/*!40000 ALTER TABLE `xrrs_user` ENABLE KEYS */;

--
-- Table structure for table `xrrs_worker`
--

DROP TABLE IF EXISTS `xrrs_worker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `xrrs_worker` (
  `worker_id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `worker_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `worker_password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `worker_status` int DEFAULT '1',
  `worker_phone` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `worker_email` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '邮箱',
  PRIMARY KEY (`worker_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xrrs_worker`
--

/*!40000 ALTER TABLE `xrrs_worker` DISABLE KEYS */;
INSERT INTO `xrrs_worker` VALUES (1,'李師傅','asdf',1,'12345676543','3262978839@qq.com');
/*!40000 ALTER TABLE `xrrs_worker` ENABLE KEYS */;

--
-- Dumping routines for database 'xrrs'
--

--
-- Final view structure for view `xrrs_order_summary`
--

/*!50001 DROP VIEW IF EXISTS `xrrs_order_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `xrrs_order_summary` AS select cast(`xrrs_orders`.`order_update_time` as date) AS `order_date`,count(0) AS `total_orders`,`xrrs_orders`.`damage_type_id` AS `damage_type_id`,count(distinct `xrrs_orders`.`order_id`) AS `damaged_orders_of_type` from `xrrs_orders` where (`xrrs_orders`.`order_update_time` >= (curdate() - interval 7 day)) group by `order_date`,`xrrs_orders`.`damage_type_id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `xrrs_order_user_info`
--

/*!50001 DROP VIEW IF EXISTS `xrrs_order_user_info`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `xrrs_order_user_info` AS select `o`.`order_id` AS `order_id`,`u`.`user_id` AS `user_id`,`u`.`user_name` AS `user_name`,`u`.`user_henau_number` AS `user_henau_number`,`u`.`user_section` AS `user_section`,`u`.`user_phone` AS `user_phone`,`o`.`final_location_id` AS `final_location_id`,`o`.`damage_type_id` AS `damage_type_id`,`o`.`damage_details` AS `damage_details`,`o`.`order_is_repaired` AS `order_is_repaired`,`o`.`order_update_time` AS `order_update_time` from (`xrrs_orders` `o` join `xrrs_user` `u` on((`o`.`user_id` = `u`.`user_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-03 23:24:24
