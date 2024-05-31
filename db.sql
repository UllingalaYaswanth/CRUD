-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: my_database
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `ID` int unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `Age` int DEFAULT NULL,
  `Dept` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (19,'Saikumar',21,'ECE'),(20,'yaswanth',23,'ece'),(21,'Saikumar',23,'ece');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `signup`
--

DROP TABLE IF EXISTS `signup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `signup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `signup`
--

LOCK TABLES `signup` WRITE;
/*!40000 ALTER TABLE `signup` DISABLE KEYS */;
INSERT INTO `signup` VALUES (1,'yaswanth','yaswanthullingala@gmail.com','123','2024-05-27 09:55:32','2024-05-27 09:55:32'),(2,'1234','saikumar235711@gmail.com','$2b$10$aXU61ZYO9VNXGWm9RYyllOvL3Nufxk1bcVyOsj9RoPaeip8y15arK','2024-05-27 10:01:38','2024-05-27 10:01:38'),(37,'12345','sa','$2b$10$r69yo01lBvBnVYOl8gWOQetra9i8UIsPqw7qaC8zyc79gDBwBcfOC','2024-05-27 10:07:00','2024-05-27 10:07:00'),(57,'yash','sai','$2b$10$finAzxUegY8v2q/jpJmGueaErRNY.10jCbOrhUmabmCk8ybF8ZQTe','2024-05-27 10:13:42','2024-05-27 10:13:42'),(64,'yashvdwaghd','dwcaE','$2b$10$eTFq5XivAT4kEA0IuoCb5upqfdyPlEo0yhjfazo8qb7Ww9FoaNGyq','2024-05-27 10:14:25','2024-05-27 10:14:25'),(71,'wevwdfvqefvq','y','$2b$10$97yxEG0amQW0YI3VaUqt2OiOdM.truujgiF0viAhWJkg5lriQ/aTe','2024-05-27 10:19:58','2024-05-27 10:19:58'),(74,'asdf','jkb','$2b$10$Jerg/Ll7lnO5WIf8ethsvuNkNUHxDudC70D4ZDt5e1Adjz7IlGsti','2024-05-27 10:30:18','2024-05-27 10:30:18'),(83,'asdfcq','adqefwef@gmail.com','$2b$10$MpDlVkqzQXI7Wqs1k/9WKubBhbvQDMnlIA8orvaqm4EdKW6CCMFc6','2024-05-27 10:33:47','2024-05-27 10:33:47'),(86,'yashu','abc@gmail.com','$2b$10$PNK40.sf/w37udUE1IGDc.D9ujfD.MhTvC6zXD0P2y7ObrOLphWUa','2024-05-27 13:02:01','2024-05-27 13:02:01'),(87,'dinesh','bhjhdbhj','$2b$10$gdjzozUfD1RYX4JlbrJpZuECE28kpUyrbHPJMEvP8tn15bx7dGEhO','2024-05-28 10:34:58','2024-05-28 10:34:58'),(88,'yaswant','yaswanth@gamial.com','$2b$10$m7y1e9OM5/f3e5vYEdjF1eoaXS4QfioAYC/aB5//nJyhihEN0H.Ce','2024-05-29 06:03:03','2024-05-29 06:03:03');
/*!40000 ALTER TABLE `signup` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-29 14:32:57
