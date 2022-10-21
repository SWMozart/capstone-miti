package de.neuefische.backend.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
class MITIControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void MITI_returnsHello() throws Exception{

        //GIVEN

        //WHEN & THEN
        mockMvc.perform(
                MockMvcRequestBuilders.get("/api/hello"))
                    .andExpect(status().is(200))
                        .andExpect(content().string("Hello from the other Side"));
    }
}