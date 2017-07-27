-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 26-07-2017 a las 22:01:50
-- Versión del servidor: 5.7.17-log
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empresas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_datos`
--

CREATE TABLE `t_datos` (
  `Id_Registro` int(11) NOT NULL,
  `RFC` varchar(18) DEFAULT NULL COMMENT 'Registro Federal de Contribuyentes.',
  `PricipalName` varchar(50) NOT NULL COMMENT 'Nombre de la persona de contacto.',
  `BusinessName` varchar(80) NOT NULL COMMENT 'Nombre de la empresa.',
  `Phone` bigint(10) NOT NULL COMMENT 'Número de teléfono de la persona de contacto.',
  `Email` varchar(80) NOT NULL COMMENT 'Correo electrónico de la persona de contacto.',
  `CreatedDate` date NOT NULL COMMENT 'Fecha de alta de registro.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `t_datos`
--
ALTER TABLE `t_datos`
  ADD PRIMARY KEY (`Id_Registro`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `t_datos`
--
ALTER TABLE `t_datos`
  MODIFY `Id_Registro` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
