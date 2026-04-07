package com.api.desafiobackend.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.endsWith;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = LogicProgramController.class)
@AutoConfigureMockMvc(addFilters = false)
class LogicProgramControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void shouldReturnExpectedVowelForChallengeExample() throws Exception {
        mockMvc.perform(get("/logicProgram").param("strToAnalyse", "aAbBABacafe"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.string").value("aAbBABacafe"))
                .andExpect(jsonPath("$.vogal").value("e"))
                .andExpect(jsonPath("$.tempoTotal", endsWith("ms")));
    }
}
