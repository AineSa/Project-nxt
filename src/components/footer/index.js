import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

class Footer extends React.Component {
    render() {
        return (
            <section className='rodape'>
                <div className='rodape__infor'>
                    <h3 className='rodape__infor__title'>
                        VAMOS CONVERSAR?
                    </h3>
                    <PhoneIcon fontSize='small' />
                    <span className='rodape__infor_text'>(81) 98260-6725</span>

                    <EmailIcon fontSize='small' />
                    <span className='rodape__infor_text'>pedido@cactus.com.br</span>

                    <AccessTimeIcon fontSize='small' />
                    <span className='rodape__infor_text'>
                        Atendimento: Segunda à sexta das 08:00 - 17:00</span>

                </div>
                <span className='rodape__message'>
                    Cactus Ltda  2019-2020  CNPJ 22.434.111/0001-00  © Seminate. Faça-nos uma visita: Rua Tapiassu 43 - Cordeiro - PE - Todos os direitos reservados. Proibida reprodução total ou parcial. Preços e estoque sujeitos a alteração sem aviso prévio.
                </span>
            </section>

        );
    }
} export default Footer;