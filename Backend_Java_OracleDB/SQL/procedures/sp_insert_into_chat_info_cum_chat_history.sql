-- for inserting data into table chat_history
create or replace procedure sp_insert_into_chat_info_cum_chat_history(
    p_CHAT_ID               out chat_info.chat_id%type,
    p_MESSAGE               in chat_history.message%type,
    p_MESSAGE_NUM_DATE      in chat_history.message_num_date%type,
    p_MESSAGE_DEC_TIME      in chat_history.message_dec_time%type,
    p_EMPLOYER_ID           in chat_info.employer_id%type,
    p_JOBSEEKER_ID          in chat_info.jobseeker_id%type,
    p_USER_ID               in user_info.user_id%type
)
is
    var_chat_history_id varchar2(32);
    gen_chat_id chat_info.chat_id%type;
    var_employer_user_id user_info.user_id%type;
    var_jobseeker_user_id user_info.user_id%type;
begin    

    --    getting chat id for the respective employer and jobseeker pair
    select chat_id into gen_chat_id 
    from chat_info ci
    where (ci.employer_id = p_EMPLOYER_ID and ci.jobseeker_id = p_JOBSEEKER_ID);
    
    --  if chat id exists then it will continue to record chat data
    --  for the given pair of employer and jobseeker
    p_CHAT_ID := gen_chat_id;
      sp_insert_into_chat_history(var_chat_history_id,
                p_MESSAGE,
                p_MESSAGE_NUM_DATE,
                p_MESSAGE_DEC_TIME,
                p_CHAT_ID,
                p_USER_ID );
    
    exception  
        when NO_DATA_FOUND then -- if chat id does not exits then a new one will be created        
            gen_chat_id := fn_gen_chat_id();
            p_CHAT_ID := gen_chat_id;
               insert into chat_info
               values ( gen_chat_id,     
                        p_EMPLOYER_ID,
                        p_JOBSEEKER_ID
                    );
            -- after creating new chat id for the given pair of employer and jobseeker 
            -- record their chat into data abse
            sp_insert_into_chat_history(var_chat_history_id,
                p_MESSAGE,
                p_MESSAGE_NUM_DATE,
                p_MESSAGE_DEC_TIME,
                p_CHAT_ID,
                p_USER_ID );
end;
/
