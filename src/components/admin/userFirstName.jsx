import React, { Component } from 'react';
import { getFirstNameOfUser } from '../../services/userService'
import { toast } from 'react-toastify';

class UserFirstName extends Component {
    constructor(props) {
        super(props);
        this.state = { userFirstName: '' }
    }

    async componentDidMount() {
        try {
            const { data: userFirstName } = await getFirstNameOfUser()

            this.setState({
                userFirstName: userFirstName.firstname
            })
        } catch (ex) {
            toast.error(<div className='text-center rtl' style={{ fontFamily: "b mitra" }}>مشکلی پیش آمده است.</div>)
            console.log('ex' + ex)
        }
    }

    render() {
        const { userFirstName } = this.state
        return (
            <span className='text-warning text-wrap p-1' style={{ fontSize: 13 }}>سلام {userFirstName}</span>
        );
    }
}

export default UserFirstName;