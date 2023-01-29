package com.api.desafiobackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Locale;

//@CrossOrigin(origins = "http://localhost:8081")
@RestController
public class LogicProgramController {

    @GetMapping("/logicProgram")
    String logicProgram(@RequestParam String strToAnalyse){

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

        if(!Arrays.stream(readed).anyMatch(charSelected::equals) && !Arrays.stream(readed).anyMatch(charSelected.toUpperCase(Locale.ROOT)::equals)){
          return charSelected;
        }
        else{
            return "";
        }
    }
}
