USE [master]
GO
/****** Object:  Database [SampleDB]    Script Date: 12/21/2021 8:28:49 AM ******/
CREATE DATABASE [SampleDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'SampleDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\SampleDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'SampleDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\SampleDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [SampleDB] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SampleDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SampleDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [SampleDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [SampleDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [SampleDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [SampleDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [SampleDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [SampleDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SampleDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SampleDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SampleDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [SampleDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [SampleDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SampleDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [SampleDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SampleDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [SampleDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SampleDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SampleDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SampleDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SampleDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SampleDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [SampleDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SampleDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [SampleDB] SET  MULTI_USER 
GO
ALTER DATABASE [SampleDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SampleDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SampleDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SampleDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [SampleDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [SampleDB] SET QUERY_STORE = OFF
GO
USE [SampleDB]
GO
/****** Object:  Table [dbo].[PromoDocKeyWord]    Script Date: 12/21/2021 8:28:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PromoDocKeyWord](
	[PromoDocId] [bigint] IDENTITY(1,1) NOT NULL,
	[PromoDocName] [varchar](100) NOT NULL,
	[SKUId] [bigint] NOT NULL,
	[SKU] [varchar](50) NOT NULL,
	[Keywords] [varchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[PromoDocId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[PromoDocKeyWord] ON 

INSERT [dbo].[PromoDocKeyWord] ([PromoDocId], [PromoDocName], [SKUId], [SKU], [Keywords]) VALUES (1, N'Optoma - F/2.57 - Zoom Lens User Manual', 1, N'OPT-12-ZL', N'Optoma, Zoom Lens')
INSERT [dbo].[PromoDocKeyWord] ([PromoDocId], [PromoDocName], [SKUId], [SKU], [Keywords]) VALUES (2, N'123" Electric Projection Screen Brochure', 2, N'123-ELEC', N'Sony, 123", Early Shipping')
INSERT [dbo].[PromoDocKeyWord] ([PromoDocId], [PromoDocName], [SKUId], [SKU], [Keywords]) VALUES (3, N'Zoom Lens User Manual', 3, N'ZL-123K', N'Zoom, Lens, Projector')
INSERT [dbo].[PromoDocKeyWord] ([PromoDocId], [PromoDocName], [SKUId], [SKU], [Keywords]) VALUES (4, N'12v 7ah Sealed Lead Acid Battery Instructions', 4, N'YS-12v7', N'Yuasa, Lead, 12v, 7ah')
INSERT [dbo].[PromoDocKeyWord] ([PromoDocId], [PromoDocName], [SKUId], [SKU], [Keywords]) VALUES (5, N'Transformer, 16.5vac 40va W/Ptc Protection Manufacturer Brochure', 5, N'TSF-165', N'Transformer, Limited Warranty')
INSERT [dbo].[PromoDocKeyWord] ([PromoDocId], [PromoDocName], [SKUId], [SKU], [Keywords]) VALUES (6, N'Bosch Mounting Box For Transformer Installation Manual', 6, N'more', N'Bosch, Mounting box, Duplex grounded receptle')
INSERT [dbo].[PromoDocKeyWord] ([PromoDocId], [PromoDocName], [SKUId], [SKU], [Keywords]) VALUES (7, N'USB To IP Adapter For Host Device by Atlona , Inc. ADI # 9L-ATOMNI311 Model # 311 - How to use', 7, N'311-USBIP', N'480 Mbps,CAT5e/6 cable')
INSERT [dbo].[PromoDocKeyWord] ([PromoDocId], [PromoDocName], [SKUId], [SKU], [Keywords]) VALUES (8, N'1000 TVL Intesifier Dome Camera With Junction Box', 8, N'CA-SPC-1000', N'IP67 rated, 12V, 5 year warranty')
INSERT [dbo].[PromoDocKeyWord] ([PromoDocId], [PromoDocName], [SKUId], [SKU], [Keywords]) VALUES (9, N'Wdh-3939wd Surveillance Camera', 9, N'Wdh-3939', N'Survellience Camera, 690TVL Min Illumin:0.1Lux')
INSERT [dbo].[PromoDocKeyWord] ([PromoDocId], [PromoDocName], [SKUId], [SKU], [Keywords]) VALUES (10, N'6 Tb Hard Drive - Internal - Sata - Guide', 10, N'Intel-6TB', N'Video Surveillance, Servers, Storage')
SET IDENTITY_INSERT [dbo].[PromoDocKeyWord] OFF
GO
USE [master]
GO
ALTER DATABASE [SampleDB] SET  READ_WRITE 
GO
