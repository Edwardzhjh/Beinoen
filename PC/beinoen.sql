SET NAMES UTF8;
DROP DATABASE IF EXISTS jd;
CREATE DATABASE jd CHARSET=UTF8;
USE jd;


/**动态生成banner_img**/
CREATE TABLE banner_img(
  bid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(32)
);
INSERT INTO banner_img VALUES
(1,'../images/haibao.jpg');