# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail
- O usuário deve receber um e-mail com instruções de recuperação
- O usuário deve poder resetar sua senha

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev
- Utilizar Amazon SES para envios em produção
- O envio de e-mails deve acontecer em background

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h
- O usuário precisa confirmar a nova senha ao resetar sua senha

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu perfil (Email, nome e senha)

**RN**

 - O usuário não pode alterar seu email para um email já ultilizado
 - Para atualizar sua senha, o usuario deve informar a senha antiga
 - Para atualizar sua senha, o usuário precisa confirmar a nova senha

# Painel de prestador

**RF**

- O usuario deve poder listar seus agendamentos de um dia especifico
- O prestador deve receber uma notificação sempre que houver
- O prestador deve poder visualizar as notificações não lidas


**RNF**

- Os agendamentos do prestador no dia devem ser armazenado em cache
- As notificações do prestador devem ser armazenados no MongoDB
- AS notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io


**RN**

- A notificação deve ter status de lida ou não lida para que o prestador possa controlar


# Agendamento de serviços

**RF**

- O usuario deve poder listar todos os prestadores de serviços cadastrados
- O usuario deve poder listar os dias de um mês com pelo menos um horário disponivel de um prestador
- O usuario deve poder listar horários disponiveis em um dia especifico de um prestador
- O usuario deve poder realizar em novo agendamento com um prestador

**RNF**

- A listagem de prestadores deve ser armazenada em cache

**RN**

 - Cada agendamento deve durar 1h exatamente
 - Os agendamentos devem estar disponiveis entre 8h as 18h (Primeiro às 8h, Ultimo as 17h)
 - O usuário não pode agendar em um horário já ocupado
 - O usuário não pode agendar em um horário que já passou
 - O usuário não pode agendar serviços consigo mesmo

