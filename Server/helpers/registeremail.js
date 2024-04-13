exports.registeremail =(username)=>{
    return(

`<table align="center" cellpadding="10" cellspacing="0" style="background-color:#FF1178">

    <tbody style="color:white;">

        <tr>
            <td >

                <h1>Welcome to our blood donation website</h1>
                <p>Dear ${username}</p>
                <p>You have been successfully registered to our blood donation website</p>
                <p>Thank you for reaching us.</p>
           </td>
        </tr>
    </tbody>
</table>`

    )
}