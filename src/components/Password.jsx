import React from 'react'
import { StSection, StInput } from '../styles/MyStyles'

function Password(props) {
  return (
    <>
      {props.passwordOpen ? (
        <StSection className="password">
          <label>Password</label>
          <StInput
            id={props.id + "password"}
            type="password"
            value={props.password}
            onChange={(event) => props.setPassword(event.target.value)}
          />
        </StSection>
      ) : (
        <></>
      )}
    </>
  )
}

export default Password
