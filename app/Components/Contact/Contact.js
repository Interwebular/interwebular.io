var React = require('react');
var ReactDom = require('react-dom');
var axios = require('axios');
var scroll  = require('react-scroll').animateScroll;

require('../../Styles/Contact.scss');

var Contact = React.createClass({

    componentWillMount: function() {
        scroll.scrollToTop({
            duration: 0
        });
    },

    getInitialState: function() {
        return {
            sending: false,
            hasError: false,
            errors: [],
            success: false
        };
    },

    handleSubmit: function(event) {
        event.preventDefault();

        this.setState({
            sending: true
        }, this.validateFormData);
    },

    validateFormData: function() {

        var formData = {
            name: ReactDom.findDOMNode(this.refs.name).value,
            email: ReactDom.findDOMNode(this.refs.email).value,
            company: ReactDom.findDOMNode(this.refs.company).value,
            message: ReactDom.findDOMNode(this.refs.message).value,
            how: ReactDom.findDOMNode(this.refs.how).value,
        };

        var _errors = [];

        if( !formData.name.length ) {
            _errors.push('Please Enter Your Name');
        }

        if( !formData.email.length ) {
            _errors.push('Please Enter Your Email');
        }

        if( !formData.message.length ) {
            _errors.push('Please Enter a Message');
        }

        if(_errors.length) {
            this.setState({
                sending: false,
                hasError: true,
                errors: _errors
            });
        }
        else {
            this.setState({
                sending: true,
                hasError: false,
                errors: [],
            }, this.sendForm(formData));
        }
    },

    sendForm: function(formData) {

        var _this = this;

        axios.post('https://formspree.io/brant@interwebular.net', formData).then(function(response) {
            if(response.status === 200) {
                _this.setState({
                    sending: false,
                    success: true
                });
            } else {
                _this.setState({
                    sending: false,
                    hasError: true,
                    success: false,
                    errors: ['There was an issue submitting this form. Please refresh the page and try again.']
                });
            }
        }).catch(function(){
            _this.setState({
                sending: false,
                hasError: true,
                success: false,
                errors: ['There was an issue submitting this form. Please refresh the page and try again.']
            });
        });
    },

    render: function() {
        return (
            <div className="contact">
                <div className="contact__wrapper">

                    <div className="contact__container">
                        <h1>Ready To Create Something Awesome Together?</h1>
                        <div className="contact__spacer"></div>

                        <div className="contact__form__group" style={{ display: this.state.success ? 'block' : 'none' }}>
                            <div className='contact__form__message'>
                                Message Sent. We will get back to you shortly.
                            </div>
                        </div>

                        <form className="contact__form" onSubmit={this.handleSubmit} style={{ display: this.state.success ? 'none' : 'block' }}>

                            <div className="contact__form__group">
                                <label className="contact__form__label" htmlFor="name">Your Name *</label>
                                <input type="text" name="name" id="name" ref="name" className="contact__form__input" />
                            </div>

                            <div className="contact__form__group">
                                <label className="contact__form__label" htmlFor="email">Your Email *</label>
                                <input type="email" name="email" id="email" ref="email" className="contact__form__input" />
                            </div>

                            <div className="contact__form__group">
                                <label className="contact__form__label" htmlFor="company">Company / Business Name</label>
                                <input type="text" name="company" id="company" ref="company" className="contact__form__input" />
                            </div>

                            <div className="contact__form__group">
                                <label className="contact__form__label" htmlFor="message">Project Details / Message / Questions / Comments *</label>
                                <textarea name="message" id="message" rows="10" ref="message" className="contact__form__input contact__form__input--small-text"></textarea>
                            </div>

                            <div className="contact__form__group">
                                <label className="contact__form__label" htmlFor="how">How Did You Hear About Us?</label>
                                <input type="text" name="how" id="how" ref="how" className="contact__form__input" />
                            </div>

                            <div className="contact__form__group" style={{ display: this.state.hasError ? 'block' : 'none' }}>
                                <div className="contact__form__message contact__form__message--error">
                                    {this.state.errors.map(function(message, index){
                                        return (
                                            <div key={index}>{message}</div>
                                        )
                                    }.bind(this))}
                                </div>
                            </div>

                            <div className="contact__form__group" style={{ textAlign: 'center' }}>
                                <button type="submit" className="cta cta--inverted">
                                    {( this.state.sending ? 'Sending...' : 'Send' )}
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        );
    }
});

module.exports = Contact;
