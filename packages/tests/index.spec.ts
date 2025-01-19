import { describe, expect, test } from 'vitest'
import axios from "axios"
const backenbUrl = 'http://localhost:8080'
const usernaem1="Laraib";
const usernaem2="Ahamd";
const password1="12345";
const password2="12345";
describe("Signup endpoints",()=>{
  test('Double signup doesnt work', async() => {
    const respomse = await axios.post(`${backenbUrl}/signup`, {
      username: usernaem1,
      password: password1
    })
    expect(respomse.status).toBe(200);
  })
})
 