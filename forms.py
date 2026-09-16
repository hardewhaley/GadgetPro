import re
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, PasswordField, DateField, BooleanField, SubmitField
from wtforms.validators import DataRequired, Email, Length, EqualTo, ValidationError 

def validate_password_strength(form, field):
    password = field.data

    if not re.search(r'[A-Z]', password):
        raise ValidationError('Password must contain atleast one uppercase letter')
    if not re.search(r'[0-9]', password):
        raise ValidationError('Password must contain one digit')
    if not re.search(r'[@#$%^&*!?_\-]', password):
        raise ValidationError('Password must contain at least one special character (@#$%^&*!?_-).')

class RegisterForm(FlaskForm):
    full_name = StringField('Full Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    gender = SelectField('Gender', choices=[('Male', 'Male'), ('Female', 'Female')], validators=[DataRequired()])
    date_of_birth = DateField('Date of Birth', validators=[DataRequired()]) 
    password = PasswordField('Password', validators=[
    DataRequired(), Length(min=8, max=15, message='Password must be 8–15 characters.')])
    confirm_password = PasswordField('Confirm Password', validators=[
    DataRequired(), EqualTo('password'),
    Length(min=8, max=15, message='Password must be 8–15 characters.'),validate_password_strength])
    accept_terms = BooleanField('I agree to Terms & Conditions', validators=[DataRequired()])
    submit = SubmitField('Sign Up')

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login')

