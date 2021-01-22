(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{215:function(t,e,s){"use strict";s.r(e);var r=s(0),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("ul",[s("li",[t._v("前向"),s("a",{attrs:{href:"https://github.com/apache/incubator-skywalking/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("发布页面"),s("OutboundLink")],1)])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"所需的第三方软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#所需的第三方软件"}},[this._v("#")]),this._v(" 所需的第三方软件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("被监控程序要求JDK6+")]),this._v(" "),e("li",[this._v("SkyWalking collector和WebUI要求JDK8+")]),this._v(" "),e("li",[this._v("Elasticsearch 5.x")]),this._v(" "),e("li",[this._v("Zookeeper 3.4.10")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"下载发布版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载发布版本"}},[this._v("#")]),this._v(" 下载发布版本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"部署elasticsearch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署elasticsearch"}},[this._v("#")]),this._v(" 部署Elasticsearch")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("修改"),s("code",[t._v("elasticsearch.yml")]),t._v("文件\n"),s("ul",[s("li",[t._v("设置 "),s("code",[t._v("cluster.name: CollectorDBCluster")]),t._v("。此名称需要和collector配置文件一致。")]),t._v(" "),s("li",[t._v("设置 "),s("code",[t._v("node.name: anyname")]),t._v(", 可以设置为任意名字，如Elasticsearch为集群模式，则每个节点名称需要不同。")]),t._v(" "),s("li",[t._v("增加如下配置")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# ES监听的ip地址\nnetwork.host: 0.0.0.0\nthread_pool.bulk.queue_size: 1000\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("启动Elasticsearch")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"部署collector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署collector"}},[this._v("#")]),this._v(" 部署collector")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("解压安装包"),e("code",[this._v("tar -xvf skywalking-collector.tar.gz")]),this._v("，windows用户可以选择zip包")]),this._v(" "),e("li",[this._v("设置Collector集群模式")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("集群模式主要依赖Zookeeper的注册和应用发现能力。所以，你只需要调整 "),e("code",[this._v("config/application.yml")]),this._v("中的host和port配置，使用实际IP和端口，代替默认配置。\n其次，将storage的注释取消，并修改为Elasticsearch集群的节点地址信息。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("config/application.yml")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("cluster:\n# 配置zookeeper集群信息\n  zookeeper:\n    hostPort: localhost:2181\n    sessionTimeout: 100000\nnaming:\n# 配置探针使用的host和port\n  jetty:\n    host: localhost\n    port: 10800\n    context_path: /\nremote:\n  gRPC:\n    host: localhost\n    port: 11800\nagent_gRPC:\n  gRPC:\n    host: localhost\n    port: 11800\nagent_jetty:\n  jetty:\n    host: localhost\n    port: 12800\n    context_path: /\nanalysis_register:\n  default:\nanalysis_jvm:\n  default:\nanalysis_segment_parser:\n  default:\n    buffer_file_path: ../buffer/\n    buffer_offset_max_file_size: 10M\n    buffer_segment_max_file_size: 500M\nui:\n  jetty:\n    host: localhost\n    port: 12800\n    context_path: /\n# 配置 Elasticsearch 集群连接信息\nstorage:\n  elasticsearch:\n    cluster_name: CollectorDBCluster\n    cluster_transport_sniffer: true\n    cluster_nodes: localhost:9300\n    index_shards_number: 2\n    index_replicas_number: 0\n    ttl: 7\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("运行"),e("code",[this._v("bin/startup.sh")]),this._v("启动。windows用户为.bat文件。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"部署ui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署ui"}},[this._v("#")]),this._v(" 部署UI")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("解压安装包 "),e("code",[this._v("tar -xvf skywalking-dist.tar.gz")]),this._v("，windows用户可以选择zip包")]),this._v(" "),e("li",[this._v("配置UI集群模式.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("UI的配置信息保存在 "),e("code",[this._v("bin/webappService.sh")]),this._v(" 中 ( windows为"),e("code",[this._v("bin\\webappService.bat")]),this._v(").")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("配置项")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("server.port")])]),t._v(" "),s("td",[t._v("监听端口")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("collector.ribbon.listOfServers")])]),t._v(" "),s("td",[t._v("collector命名服务地址.(与 "),s("code",[t._v("config/application.yml")]),t._v(" 中的"),s("code",[t._v("naming.jetty")]),t._v("配置保持相同 )，多个Collector地址以"),s("code",[t._v(",")]),t._v("分割")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("运行 "),e("code",[this._v("bin/webappService.sh")])])])}],!1,null,null,null);e.default=n.exports}}]);