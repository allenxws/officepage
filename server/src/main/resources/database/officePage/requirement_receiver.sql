CREATE TABLE `requirement_receiver` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `receiver_email` varchar(32) NOT NULL DEFAULT '' COMMENT '接收人邮箱地址',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '删除字段：0未删除，1已删除',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='客户需求接收邮件记录表'