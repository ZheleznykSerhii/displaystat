import React, { useEffect, useState } from 'react'

const BannerStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  let activateEditMode = () => {
    setEditMode(true)
  }

  let deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatusThunk(status)
  }

  let onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode && (
        <span onDoubleClick={activateEditMode}>
          {props.status || 'no status'}
        </span>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            Value={status}
            autoFocus={true}
          ></input>
        </div>
      )}
    </div>
  )
}

export default BannerStatusWithHooks
