const MaterialIcon = ({ icon, startIcon, endIcon }) => {
    return (
        icon
            ?
            <span
                className='material-icons'
                style={{
                    margin: `${startIcon ? '0 10px 0 15px' :
                        endIcon ? '0 15px 0' : ''
                        }`
                }}
            >
                {icon}
            </span>
            :
            ''
    )
}

export default MaterialIcon