const Notification = ({ message, check }) => {
    if (message === null) {
      return null
    }

    return (
      <div className={check}>
        {message}
      </div>
    )
  }

export default Notification