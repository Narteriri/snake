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
    @ResponseBody                   // localhost:3030/pk/getbotinfo/
    public Map<String, String> getBotInfo(){

        Map<String, String> bot1 = new HashMap();
        bot1.put("name", "Nara");
        bot1.put("power", "666666666");

        return bot1;
    }

}
