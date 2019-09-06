import React, { Component } from 'react';
import { getUserAvatar } from '../../services/userService'
import { toast } from 'react-toastify';

class UserAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = { preview: '' }
    }

    async componentDidMount() {
        try {
            const { data: userAvatar } = await getUserAvatar()

            this.setState({
                preview: userAvatar.preview
            })
        } catch (ex) {
            toast.error(<div className='text-center rtl' style={{ fontFamily: "b mitra" }}>مشکلی پیش آمده است.</div>)
            console.log('ex' + ex)
        }
    }

    render() {
        const { preview } = this.state
        return (
            <img id="craLogo" alt="craLogo" src={preview} width="60" height="60" className="rounded-circle d-inline-block align-top m-0" />
        );
    }
}

export default UserAvatar;