package com.api.desafiobackend.controller;

import com.api.desafiobackend.model.LogicProgram;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Locale;

@RestController
@CrossOrigin("*")
public class LogicProgramController {

    @GetMapping("/logicProgram")
    LogicProgram logicProgram(@RequestParam String strToAnalyse){
        long start = System.currentTimeMillis();
        String[] vogais = {"A", "a", "E", "e", "I", "i", "O", "o", "U", "u"};
        String[] arrayChar = strToAnalyse.split("(?!^)");
        String [] readed = {};
        String charSelected = "";

        for(int i = 1;i<(arrayChar.length-1);i++){
            int finalI = i;
            if (Arrays.stream(vogais).anyMatch(j-> arrayChar[(finalI+1)].equals(j)) &&
                    Arrays.stream(vogais).anyMatch(j-> arrayChar[(finalI -1)].equals(j)) &&
                    !Arrays.stream(vogais).anyMatch(j-> arrayChar[finalI].equals(j)) &&
                    !Arrays.stream(readed).anyMatch(j-> arrayChar[finalI].equals(j)) &&
                    !Arrays.stream(readed).anyMatch(j-> arrayChar[(finalI+1)].equals(j)) ){
                charSelected =  arrayChar[(finalI+1)];
            }
        }
        LogicProgram response = new LogicProgram();
        if(!Arrays.stream(readed).anyMatch(charSelected::equals) && !Arrays.stream(readed).anyMatch(charSelected.toUpperCase(Locale.ROOT)::equals)){
            response.setString(strToAnalyse);
            response.setVogal(charSelected);
            long elapsed = System.currentTimeMillis() - start;
            response.setTempoTotal(String.valueOf(elapsed)+"ms");
        }
        return response;
    }
}
