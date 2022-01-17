(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{505:function(e,n,s){"use strict";s.r(n);var a=s(20),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[s("strong",[e._v("在获取入参的时候，get方式的接口可以直接获取到，但是post形式的body获取以后会造成无法再使用，所以必须经过一层转换以后再读取。")])]),e._v(" "),s("p",[e._v("直接上代码")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\n@Component\npublic class CacheBodyGatewayFilter implements GlobalFilter, Ordered {\n    public static final String CACHE_REQUEST_BODY_OBJECT_KEY = "cachedRequestBodyObject";\n\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {\n        if (exchange.getRequest().getHeaders().getContentType() == null) {\n            return chain.filter(exchange);\n        } else {\n            return DataBufferUtils.join(exchange.getRequest().getBody())\n                    .flatMap(dataBuffer -> {\n                        DataBufferUtils.retain(dataBuffer);\n                        Flux<DataBuffer> cachedFlux = Flux\n                                .defer(() -> Flux.just(dataBuffer.slice(0, dataBuffer.readableByteCount())));\n                        ServerHttpRequest mutatedRequest = new ServerHttpRequestDecorator(\n                                exchange.getRequest()) {\n                            @Override\n                            public Flux<DataBuffer> getBody() {\n                                return cachedFlux;\n                            }\n\n                        };\n                        exchange.getAttributes().put(CACHE_REQUEST_BODY_OBJECT_KEY, cachedFlux);\n\n                        return chain.filter(exchange.mutate().request(mutatedRequest).build());\n                    });\n        }\n    }\n\n    @Override\n    public int getOrder() {\n    \t//这个代表了执行顺序，值越小越先执行 \n        return Ordered.HIGHEST_PRECEDENCE;\n    }\n}\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br")])]),s("p",[e._v("接下来是读取方法")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\n@Component\npublic class AccessLogGlobalFilter implements GlobalFilter, Ordered {\n    public static final String CACHE_REQUEST_BODY_OBJECT_KEY = "cachedRequestBodyObject";\n\n\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {\n        ServerHttpRequest request = exchange.getRequest();\n\n        //Record only http requests (including https)\n        String schema = request.getURI().getScheme();\n        if ((!"http".equals(schema) && !"https".equals(schema))) {\n            return chain.filter(exchange);\n        }\n\t\t//我自定义的实体类，如果不需要 你可以直接删掉\n        LogDTO logDTO = new LogDTO();\n        logDTO.setPath(request.getURI().getPath());\n        logDTO.setQueryParams(request.getQueryParams());\n        logDTO.setMethod(request.getMethod().name());\n        logDTO.setIp(request.getRemoteAddress().getHostName());\n        logDTO.setUserAgent(request.getHeaders().getFirst("User-Agent"));\n        exchange.getAttributes().put("startTime", System.currentTimeMillis());\n\n\n        //获取request body\n        Flux<DataBuffer> cachedBody = exchange.getAttribute(CACHE_REQUEST_BODY_OBJECT_KEY);\n        if(cachedBody!=null){\n            String raw = toRaw(cachedBody);\n            logDTO.setParams(raw);\n        }\n\n\n        return returnMono(chain, exchange, logDTO);\n    }\n\n    private Mono<Void> returnMono(GatewayFilterChain chain, ServerWebExchange exchange, LogDTO logDTO) {\n        return chain.filter(exchange).then(Mono.fromRunnable(() -> {\n            Long startTime = exchange.getAttribute("startTime");\n            if (startTime != null) {\n                long executeTime = (System.currentTimeMillis() - startTime);\n                logDTO.setTime(executeTime);\n                logDTO.setResultCode(Objects.requireNonNull(exchange.getResponse().getStatusCode()).value());\n                StaticLog.info("=================================");\n                StaticLog.info("请求方式：[{}]", logDTO.getMethod());\n                StaticLog.info("路径：[{}]", logDTO.getPath());\n                StaticLog.info("IP：[{}]", logDTO.getIp());\n                StaticLog.info("UserAgent：[{}]", logDTO.getUserAgent());\n                StaticLog.info("请求格式[{}]", exchange.getResponse().getHeaders().getContentType());\n                StaticLog.info("时长：[{}]", executeTime);\n                StaticLog.info("code：[{}]", logDTO.getResultCode());\n                StaticLog.info("body：[{}]", logDTO.getParams());\n            }\n        }));\n    }\n\n    @Override\n    public int getOrder() {\n    \t//这个filter的执行顺序要在 CacheBodyGatewayFilter 类之后 否则找不到缓存的值\n        return Ordered.HIGHEST_PRECEDENCE+1;\n    }\n\n    /**\n     * 用于获取请求参数\n     *\n     * @param body\n     * @return\n     */\n    private static String toRaw(Flux<DataBuffer> body) {\n        AtomicReference<String> rawRef = new AtomicReference<>();\n        body.subscribe(buffer -> {\n            byte[] bytes = new byte[buffer.readableByteCount()];\n            buffer.read(bytes);\n            DataBufferUtils.release(buffer);\n            rawRef.set(Strings.fromUTF8ByteArray(bytes));\n        });\n        return rawRef.get();\n    }\n\n}\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br"),s("span",{staticClass:"line-number"},[e._v("56")]),s("br"),s("span",{staticClass:"line-number"},[e._v("57")]),s("br"),s("span",{staticClass:"line-number"},[e._v("58")]),s("br"),s("span",{staticClass:"line-number"},[e._v("59")]),s("br"),s("span",{staticClass:"line-number"},[e._v("60")]),s("br"),s("span",{staticClass:"line-number"},[e._v("61")]),s("br"),s("span",{staticClass:"line-number"},[e._v("62")]),s("br"),s("span",{staticClass:"line-number"},[e._v("63")]),s("br"),s("span",{staticClass:"line-number"},[e._v("64")]),s("br"),s("span",{staticClass:"line-number"},[e._v("65")]),s("br"),s("span",{staticClass:"line-number"},[e._v("66")]),s("br"),s("span",{staticClass:"line-number"},[e._v("67")]),s("br"),s("span",{staticClass:"line-number"},[e._v("68")]),s("br"),s("span",{staticClass:"line-number"},[e._v("69")]),s("br"),s("span",{staticClass:"line-number"},[e._v("70")]),s("br"),s("span",{staticClass:"line-number"},[e._v("71")]),s("br"),s("span",{staticClass:"line-number"},[e._v("72")]),s("br"),s("span",{staticClass:"line-number"},[e._v("73")]),s("br"),s("span",{staticClass:"line-number"},[e._v("74")]),s("br"),s("span",{staticClass:"line-number"},[e._v("75")]),s("br"),s("span",{staticClass:"line-number"},[e._v("76")]),s("br"),s("span",{staticClass:"line-number"},[e._v("77")]),s("br"),s("span",{staticClass:"line-number"},[e._v("78")]),s("br"),s("span",{staticClass:"line-number"},[e._v("79")]),s("br"),s("span",{staticClass:"line-number"},[e._v("80")]),s("br"),s("span",{staticClass:"line-number"},[e._v("81")]),s("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);