import { describe, expect, it, test } from 'vitest'
import axios, { options } from "axios"
const backenbUrl = 'http://localhost:8080'
const phone_no="Laraib";
const name="12345";
describe("Signup endpoints",()=>{
  it('Double signup doesnt work', async() => {
    const response1 = await axios.post(`${backenbUrl}/api/v1/signup`, {
      number: phone_no,
    });
    const response2 = await axios.post(`${backenbUrl}/api/v1/signup/verify`, {
      name: name,
      otp:"12345",
    });
    expect(response1.status).toBe(200);
    expect(response2.status).toBe(200);
    expect(response1.data).not.toBeNull();
    expect(async()=>{
      await axios.post(`${backenbUrl}/api/v1/signup`, {
        number: phone_no,
      });
    }).toThrow(); 
    })
})
 