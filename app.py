from flask import Flask, render_template, redirect, url_for, flash
from forms import RegisterForm, LoginForm
app = Flask(__name__)

app.config['SECRET_KEY'] = 'bc751ff51ae622efd5e458c12a43897c'


products = [
    {
        "id": 1,
        "name": "Wireless Headphones",
        "price": 35000,
        "qty": 10,
        "description": "High-quality wireless headphones with clear sound, deep bass, comfortable ear cushions, & long battery life",
        "button": "Add to Cart",
        "image": "/static/images/headphone.png"
    },
    {
        "id": 2,
        "name": "Portable Bluetooth Speaker",
        "price": 25000,
        "qty": 15,
        "description": "Compact portable speaker with powerful sound, strong bass, Bluetooth connectivity, and a rechargeable battery.",
        "button": "Add to Cart",
        "image": "/static/images/bluetooth.png"
    },
    {
        "id": 3,
        "name": "Smart Fitness Watch",
        "price": 45000,
        "qty": 20,
        "description": "Stylish smartwatch with fitness tracking, notifications, multiple watch faces, and long-lasting battery.",
        "button": "Add to Cart",
        "image": "/static/images/watch.png"
    },
    {
        "id": 4,
        "name": "20,000mAh Fast-Charging Power Bank",
        "price": 18000,
        "qty": 5,
        "description": "High-capacity power bank designed to charge smartphones and other compatible devices quickly while on the go.",
        "button": "Add to Cart",
        "image": "/static/images/power.png"
    },
    {
        "id": 5,
        "name": "Ergonomic Wireless Mouse",
        "price": 12000,
        "qty": 22,
        "description": "Comfortable wireless mouse with precise tracking, smooth navigation, and reliable wireless connectivity.",
        "button": "Add to Cart",
        "image": "/static/images/mouse.png"
    },
    {
        "id": 6,
        "name": "RGB Mechanical Gaming Keyboard",
        "price": 30000,
        "qty": 22,
        "description": "Responsive mechanical keyboard with RGB lighting, durable keys, and a comfortable design for gaming and typing.",
        "button": "Add to Cart",
        "image": "/static/images/keyboard.png"
    },
    {
        "id": 7,
        "name": "25W Fast Phone Charger",
        "price": 10000,
        "qty": 22,
        "description": "Compact fast charger designed to provide efficient and reliable charging for compatible smartphones and devices.",
        "button": "Add to Cart",
        "image": "/static/images/charger.png"
    },
    {
        "id": 8,
        "name": "Premium USB-C Fast Charging Cable",
        "price": 7000,
        "qty": 22,
        "description": "Durable USB-C cable designed for fast charging and reliable data transfer.",
        "button": "Add to Cart",
        "image": "/static/images/cord.png"
    },
    {
        "id": 9,
        "name": "Adjustable Aluminium Laptop Stand",
        "price": 20000,
        "qty": 22,
        "description": "Strong adjustable laptop stand designed to provide a comfortable viewing position and improve your workspace setup.",
        "button": "Add to Cart",
        "image": "/static/images/stand.png"
    },
]

@app.route('/')
@app.route('/home')
def home():
    home_title = "home page"
    return render_template('home.html', title=home_title, products=products)



@app.route('/register', methods=['GET', 'POST'])
def register():
    register_title="register page"
    form=RegisterForm()

    if form.validate_on_submit():
        full_name = form.full_name.data
        email = form.email.data
        gender = form.gender.data
        date_of_birth = form.date_of_birth.data
        password = form.password.data
        confirm_password = form.confirm_password.data

        flash(f"Account has been created successfully! You can now Login.", "success")
        return redirect(url_for('login'))
    return render_template('register.html', title=register_title, form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    login_title = "login page"
    form = LoginForm()

    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data
        remember = form.remember.data

        return redirect(url_for('index'))
    return render_template('login.html', title=login_title, form=form)

@app.route('/product', methods=['GET'])
def product():
    product_title='product page'
    return render_template('product.html', title=product_title, products=products)

@app.route('/cart')
def cart():
    return render_template('cart.html')







if __name__ == "__main__":
    app.run(debug=True) 