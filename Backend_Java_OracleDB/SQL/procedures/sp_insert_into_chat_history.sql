-- for inserting data into table chat_history
create or replace procedure sp_insert_into_chat_history(
    p_CHAT_HISTORY_ID       out chat_history.chat_history_id%type,
    p_MESSAGE               in chat_history.message%type,
    p_MESSAGE_NUM_DATE      in chat_history.message_num_date%type,
    p_MESSAGE_DEC_TIME      in chat_history.message_dec_time%type,
    p_CHAT_ID               in chat_history.chat_id%type,
    p_USER_ID               in chat_history.user_id%type
)
is
    gen_chat_history_id employer_details.employer_id%type;
begin    
    gen_chat_history_id := fn_gen_chat_history_id();
    p_CHAT_HISTORY_ID := gen_chat_history_id;
       insert into chat_history
       values ( gen_chat_history_id,     
                p_MESSAGE,
                p_MESSAGE_NUM_DATE,
                p_MESSAGE_DEC_TIME,
                p_CHAT_ID,
                p_USER_ID
            );
end;
/
