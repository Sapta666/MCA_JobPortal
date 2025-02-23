-- for updating data in table UserInfo
create or replace procedure sp_update_user_info(
    p_user_id       in user_info.user_id%type,
    p_USER_NAME     in user_info.USER_NAME%type,
    p_PASSWORD      in user_info.PASSWORD%type,               
    p_ADDRESS       in user_info.ADDRESS%type,         
    p_ADDRESS_2     in user_info.ADDRESS_2%type,       
    p_PH_NO         in user_info.PH_NO%type,                    
    p_EMAIL_ID      in user_info.EMAIL_ID%type,                
    p_USER_TYPE     in user_info.USER_TYPE%type,       
    p_USER_STATUS   in user_info.USER_STATUS%type,     
    p_DOB_NUM_DATE  in user_info.DOB_NUM_DATE%type,           
    p_GENDER        in user_info.GENDER%type,            
    p_COUNTRY_CODE  in user_info.COUNTRY_CODE%type,          
    p_STATE_CODE    in user_info.STATE_CODE%type,          
    p_CITY          in user_info.CITY%type,                  
    p_ZIP           in user_info.ZIP%type,         
    p_F_NAME        in user_info.F_NAME%type,         
    p_L_NAME        in user_info.L_NAME%type
)
is
begin    
    update user_info set 
        user_id =       p_user_id,
        USER_NAME =     p_USER_NAME,       
        PASSWORD =      p_PASSWORD,                 
        ADDRESS =       p_ADDRESS,                  
        PH_NO =         p_PH_NO,                      
        EMAIL_ID =      p_EMAIL_ID,                  
        USER_TYPE =     p_USER_TYPE,         
        USER_STATUS =   p_USER_STATUS,      
        ADDRESS_2 =     p_ADDRESS_2,             
        DOB_NUM_DATE =  p_DOB_NUM_DATE,           
        GENDER =        p_GENDER,              
        COUNTRY_CODE =  p_COUNTRY_CODE,
        STATE_CODE =    p_STATE_CODE,            
        CITY =          p_CITY,                    
        ZIP =           p_ZIP,           
        F_NAME =        p_F_NAME,           
        L_NAME =        p_L_NAME
    where user_id = p_user_id;
end;
/

