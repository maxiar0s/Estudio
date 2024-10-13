const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  return (
    <div className="error w-50 ms-3" id="notification">
      {message}
    </div>
  );
};

export default Notification;
