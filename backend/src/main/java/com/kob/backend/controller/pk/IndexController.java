package com.kob.backend.controller.pk;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/pk/")
public class IndexController {

    @RequestMapping("getbotinfo/")
    @ResponseBody
    public List<Map<String, String>> getBotInfo(){

        // List<String> list = new ArrayList<>();
        // list.add("Nara");
        // list.add("Narion");

        List<Map<String, String>> bots = new ArrayList<>();

        Map<String, String> bot1 = new HashMap();
        bot1.put("Name", "Nara");
        bot1.put("Power", "666666666");
        bots.add(bot1);

        Map<String, String> bot2 = new HashMap();
        bot2.put("Name", "Nara");
        bot2.put("Power", "666666666");
        bots.add(bot2);

        return bots;
    }

    @RequestMapping("index/")
    public String index() {
        return "pk/index.html";
    }

    @RequestMapping("test/")
    @ResponseBody
    public String test() {
        return "Hello World!";
    }
}
