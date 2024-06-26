-- MySQL Script generated by MySQL Workbench
-- Tue Apr  2 20:26:26 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema barberia_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema barberia_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `barberia_db` DEFAULT CHARACTER SET utf8 ;
USE `barberia_db` ;

-- -----------------------------------------------------
-- Table `barberia_db`.`Sucursal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `barberia_db`.`Sucursal` (
  `idSucursal` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `ubicacion` VARCHAR(45) NOT NULL,
  `desc` VARCHAR(45) NULL,
  PRIMARY KEY (`idSucursal`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `barberia_db`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `barberia_db`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `pwd` VARCHAR(100) NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NULL,
  `fechaNacimiento` DATE NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `barberia_db`.`Empleado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `barberia_db`.`Empleado` (
    `idEmpleado` INT NOT NULL AUTO_INCREMENT,
    `idSucursal` INT NOT NULL,
    `nombre` VARCHAR(45) NOT NULL,
    `img` VARCHAR(45) NULL,
    `desc` VARCHAR(45) NULL,
    PRIMARY KEY (`idEmpleado`),
    INDEX `idSucursal_idx` (`idSucursal` ASC),
    CONSTRAINT `fk_idSucursal`
        FOREIGN KEY (`idSucursal`)
        REFERENCES `barberia_db`.`Sucursal` (`idSucursal`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `barberia_db`.`Servicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `barberia_db`.`Servicio` (
  `idServicio` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `costo` DOUBLE NOT NULL,
  `desc` VARCHAR(45) NULL,
  PRIMARY KEY (`idServicio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `barberia_db`.`Turno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `barberia_db`.`Turno` (
    `idTurno` INT NOT NULL AUTO_INCREMENT,
    `idUsuario` INT NOT NULL,
    `idEmpleado` INT NOT NULL,
    `idServicio` INT NOT NULL,
    `horaInicio` DATETIME NOT NULL,
    `horaFin` DATETIME NOT NULL,
    `turno` VARCHAR(45) NULL,
    PRIMARY KEY (`idTurno`),
    INDEX `idUsuario_idx` (`idUsuario` ASC),
    INDEX `idEmpleado_idx` (`idEmpleado` ASC),
    INDEX `idServicio_idx` (`idServicio` ASC),
    CONSTRAINT `fk_idUsuario`
        FOREIGN KEY (`idUsuario`)
        REFERENCES `barberia_db`.`Usuario` (`idUsuario`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_idEmpleado`
        FOREIGN KEY (`idEmpleado`)
        REFERENCES `barberia_db`.`Empleado` (`idEmpleado`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `fk_idServicio`
        FOREIGN KEY (`idServicio`)
        REFERENCES `barberia_db`.`Servicio` (`idServicio`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
) ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
