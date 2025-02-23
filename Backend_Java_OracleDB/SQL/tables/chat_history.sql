create table chat_history(
    chat_history_id varchar2(32),
    message varchar2(32),
    message_num_date number,
    message_dec_time number,
    chat_id varchar2(32),
    user_id varchar2(32),
    constraint pk_#chat_history_$chat_history_id primary key(chat_history_id),
    constraint fk_#chat_history_$chat_id_#chat_info_$chat_id foreign key (chat_id) references chat_info(chat_id),
    constraint fk_#chat_history_$user_id_#user_info_$user_id foreign key (user_id) references user_info(user_id)
);
        
desc chat_history;

select * from chat_history;