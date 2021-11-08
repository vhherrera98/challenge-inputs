import React, { useState, useEffect } from 'react'
import MaterialIcon from './MaterialIcon'
import '../styles/input.css'

const Input = (props) => {

    const [styles, setStyles] = useState('')
    const [text, setText] = useState('')

    const labelToggle = (e) => {
        const child = e.target
        const parent = child.parentNode
        const parent2 = parent.parentNode
        const label = parent2.children[0]
        parent.classList.toggle('focus')
        label.classList.toggle('focus')
    }

    useEffect(() => {
        props.error ? setStyles('error') : setStyles('')
        setText(props.value)
    }, [props])

    useEffect(() => {
        if (props.disabled) {
            const childs = document.getElementsByTagName('input')
            for (let i = 0; i < childs.length; i++) {
                if (childs[i].disabled) {
                    const parent = childs[i].parentNode
                    parent.classList.add('disabled')
                }
            }
        }
    }, [props.disabled])

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <code>{props.code}</code>
            <div
                className={`form-control ${styles}`}
                style={{
                    width: `${props.fullWidth ? '100%' : ''}`
                }}
            >
                <label>
                    Label
                </label>
                <div className="input">
                    {
                        !props.multiline
                            ?
                            <>
                                {props.startIcon
                                    ?
                                    <MaterialIcon
                                        icon='phone'
                                        startIcon
                                    />
                                    :
                                    ''
                                }
                                <input
                                    value={text}
                                    onChange={handleChange}
                                    disabled={props.disabled}
                                    onFocus={labelToggle}
                                    onBlur={labelToggle}
                                    type="text"
                                    placeholder="Placeholder"
                                    className={`${props.size}`}
                                    style={{
                                        width: `${props.fullWidth ? '100%' : ''}`
                                    }}
                                />
                                {props.endIcon
                                    ?
                                    <MaterialIcon
                                        icon='lock'
                                        endIcon
                                    />
                                    :
                                    ''
                                }
                            </>
                            :
                            <textarea
                                cols="30"
                                rows={props.row}
                                placeholder="Placeholder"
                                onFocus={labelToggle}
                                onBlur={labelToggle}
                            ></textarea>
                    }
                </div>
                <span>{props.helperText ? props.helperText : ''}</span>
            </div>
        </>
    )
}

export default Input