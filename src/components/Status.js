

const Status = ({body}) => {
  return (
    <div>
        <h2 className="status-title"> Status </h2>
        <p className="status-body">
            {body}
        </p>
    </div>
  )
}

export default Status