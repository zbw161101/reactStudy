/**
 * Created by ZhaoBoWen on 2017/5/29.
 */
import React from 'react'

function forms(props) {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export {forms}