CREATE TABLE `requirement_record` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `type` tinyint(1) DEFAULT NULL COMMENT '需求类型，0经济型小程序1高级型小程序2豪华型小程序3高端定制版小程序4经济型公众号5高级型公众号6豪华型公众号7高端定制版公众号8商城解决方案',
  `phone` varchar(16) DEFAULT '' COMMENT '客户手机号',
  `content` varchar(1000) DEFAULT NULL COMMENT '客户需求内容',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '删除字段：0未删除，1已删除',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='客户需求记录表'