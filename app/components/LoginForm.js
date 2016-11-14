import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';

export default class LoginForm extends React.Component {

    render() {
        return (
        	<div>
        	<div>SwapSkills: Войти в систему</div>
        	<Paper zDepth={2}>
                <TextField ref='username' hintText="Email" underlineShow={false} />
                <Divider />
                <TextField ref='password' hintText="Password" type="password" underlineShow={false} />
                <Divider />
                <div>
                    <RaisedButton
                        style={{ float: 'right'}}
                        label="Вход"
                        secondary={true}
                        />
                </div>
            </Paper>
            </div>
        );
    }
};