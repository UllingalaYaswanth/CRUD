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
  `MobileNumber` int DEFAULT NULL,
  `Role` enum('employee','admin') DEFAULT NULL,
  `Photo` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (40,'Dinesh',26,'MCA',98127623,'admin','Photo-1717566271022.jpg'),(41,'Sai',25,'CSE',912837465,'employee','Photo-1717566304460.jpeg'),(43,'Karthik',21,'ECE',213412534,'employee','Photo-1717566435276.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `signup`
--

LOCK TABLES `signup` WRITE;
/*!40000 ALTER TABLE `signup` DISABLE KEYS */;
INSERT INTO `signup` VALUES (1,'yaswanth','yaswanthullingala@gmail.com','123','2024-05-27 09:55:32','2024-05-27 09:55:32'),(2,'1234','saikumar235711@gmail.com','$2b$10$aXU61ZYO9VNXGWm9RYyllOvL3Nufxk1bcVyOsj9RoPaeip8y15arK','2024-05-27 10:01:38','2024-05-27 10:01:38'),(37,'12345','sa','$2b$10$r69yo01lBvBnVYOl8gWOQetra9i8UIsPqw7qaC8zyc79gDBwBcfOC','2024-05-27 10:07:00','2024-05-27 10:07:00'),(57,'yash','sai','$2b$10$finAzxUegY8v2q/jpJmGueaErRNY.10jCbOrhUmabmCk8ybF8ZQTe','2024-05-27 10:13:42','2024-05-27 10:13:42'),(64,'yashvdwaghd','dwcaE','$2b$10$eTFq5XivAT4kEA0IuoCb5upqfdyPlEo0yhjfazo8qb7Ww9FoaNGyq','2024-05-27 10:14:25','2024-05-27 10:14:25'),(71,'wevwdfvqefvq','y','$2b$10$97yxEG0amQW0YI3VaUqt2OiOdM.truujgiF0viAhWJkg5lriQ/aTe','2024-05-27 10:19:58','2024-05-27 10:19:58'),(74,'asdf','jkb','$2b$10$Jerg/Ll7lnO5WIf8ethsvuNkNUHxDudC70D4ZDt5e1Adjz7IlGsti','2024-05-27 10:30:18','2024-05-27 10:30:18'),(83,'asdfcq','adqefwef@gmail.com','$2b$10$MpDlVkqzQXI7Wqs1k/9WKubBhbvQDMnlIA8orvaqm4EdKW6CCMFc6','2024-05-27 10:33:47','2024-05-27 10:33:47'),(86,'yashu','abc@gmail.com','$2b$10$PNK40.sf/w37udUE1IGDc.D9ujfD.MhTvC6zXD0P2y7ObrOLphWUa','2024-05-27 13:02:01','2024-05-27 13:02:01'),(87,'dinesh','bhjhdbhj','$2b$10$gdjzozUfD1RYX4JlbrJpZuECE28kpUyrbHPJMEvP8tn15bx7dGEhO','2024-05-28 10:34:58','2024-05-28 10:34:58'),(88,'yaswant','yaswanth@gamial.com','$2b$10$m7y1e9OM5/f3e5vYEdjF1eoaXS4QfioAYC/aB5//nJyhihEN0H.Ce','2024-05-29 06:03:03','2024-05-29 06:03:03'),(89,'yaswanth@gmail.com','yaswanth@gmail.com','$2b$10$O9Jowmfut00Hzl1Ul7WOhuGxosVGkfOKSGesPJpn/KSd2hZg3xeny','2024-05-29 10:34:54','2024-05-29 10:34:54'),(90,'yaswanthullingala','ullingala@gmail.com','$2b$10$SJe.HTsfmlTWE/x/8RYxO.tz.4Xzvs8Fo7Fho.BFk6bOW7S7jjSYC','2024-05-29 11:25:08','2024-05-29 11:25:08'),(92,'1234','gcdgasj@gmial.com','$2b$10$NVayZxSu713bCOuCYkOK3.1uq9fkbRUpUWmoISw9uqKEtxxkucAhu','2024-05-29 11:28:30','2024-05-29 11:28:30'),(93,'1234','csg@gmail.com','$2b$10$f/ptubASfxqhu853mKgFjux7dQBdEI6BI.SL4hlIoIbADzz/Bdcra','2024-05-29 11:35:08','2024-05-29 11:35:08'),(94,'1234','csadcg@gmail.com','$2b$10$lVsdgB4X.e9JZSBVqkQKqOIG9dqY7VVonxHWM7Civ9l0QefgsZjeG','2024-05-29 11:39:47','2024-05-29 11:39:47'),(95,'asdfgg','ajhcgads@gmail.com','$2b$10$G10aKHK9a2rwC3DstLC1luZEcq8Dbcxq92o5517HA/dRcLtH85Ade','2024-05-29 11:46:07','2024-05-29 11:46:07'),(96,'asdf','wvkqcd@gamil.com','$2b$10$hAUVMattXAjJEs9Km.2UZ.UiS2k9knkFl3J3CY.HNDdpLfMMbc0O.','2024-05-30 05:47:55','2024-05-30 05:47:55'),(97,'asdfghjkl','asdfghjk@gmail.com','$2b$10$tOr2j24Abjw63nGRwhJE7u8Amt1NtWLmkcALDXgtOBQ9JRwabAxM2','2024-05-30 05:53:00','2024-05-30 05:53:00'),(98,'yaswanth','zxcvbnm@gmail.com','$2b$10$6Cll6Jqq6BNsksLATQW2uu5bAFH52Y4TCy31C5v3ylsqzpFT66LSi','2024-05-30 06:04:29','2024-05-30 06:04:29'),(99,'zxcvbnm','zxcvb@gmail.com','$2b$10$2pGOI5sOuf1xs.5L.8UqruuFtIgMaOdve210i2FbA313B5mpCVk/G','2024-05-30 06:07:12','2024-05-30 06:07:12'),(100,'zxcvbnm','zxcv@gmail.com','$2b$10$L7ZGFsFmKw9ME6JR2mCEGOlwPFH7Rg84cJzVshGbL18DRnM49Iajm','2024-05-30 06:09:31','2024-05-30 06:09:31'),(101,'vcjhds','z@gmail.com','$2b$10$gYUBA2QZ7dv40X0fPtY1ce.kZMkX2s11cvux/vDfCn6yxu9bz0ZI.','2024-05-30 06:14:48','2024-05-30 06:14:48'),(102,'zxcvbnm','x@gmail.com','$2b$10$R4el7V6fq9O/dHJ3MBIRN.XmoKAQZHIiK5IMUhqlOCir.F0b8g.4W','2024-05-30 06:21:42','2024-05-30 06:21:42'),(103,'zxcvbnm','c@gmail.com','$2b$10$aHBLJtBi/mLK8DawNJNZv.A0nGdnINWktsM8Is4wfgWm.KCIvvpQG','2024-05-30 06:22:40','2024-05-30 06:22:40'),(104,'zxcvbnm','v@gmail.com','$2b$10$Ea9Rtooa6R/KjVr7.wrVUOSpF/XJOQNBC0TDD5L/m9zQSVFNzLcHm','2024-05-30 06:22:49','2024-05-30 06:22:49'),(105,'zxcvbnm','m@gmail.com','$2b$10$BVnjGJvhXGSFFANn1UalGuOhbx9CclRHviy2T/2KaxGa80dKWlinW','2024-05-30 06:33:01','2024-05-30 06:33:01'),(106,'asdf','jbcads@gmail.com','$2b$10$rvwrdK9a4gCrsdpXD1D1BuBKx/eRXeaDB4ZIMmjmY4X51fmbeobHe','2024-05-31 06:03:39','2024-05-31 06:03:39');
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

-- Dump completed on 2024-06-05 11:57:24
