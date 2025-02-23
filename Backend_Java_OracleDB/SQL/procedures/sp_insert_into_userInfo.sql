-- for inserting data into table UserInfo
create or replace procedure sp_insert_into_userInfo(
    p_user_id     out user_info.user_id%type,
    p_USER_NAME   in user_info.USER_NAME%type,
    p_PASSWORD    in user_info.PASSWORD%type,               
    p_ADDRESS     in user_info.ADDRESS%type,         
    p_ADDRESS_2   in user_info.ADDRESS_2%type,       
    p_PH_NO       in user_info.PH_NO%type,                    
    p_EMAIL_ID    in user_info.EMAIL_ID%type,                
    p_USER_TYPE   in user_info.USER_TYPE%type,       
    p_USER_STATUS in user_info.USER_STATUS%type,     
    p_DOB_NUM_DATE in user_info.DOB_NUM_DATE%type,           
    p_GENDER      in user_info.GENDER%type,            
    p_COUNTRY_CODE in user_info.COUNTRY_CODE%type,          
    p_STATE_CODE  in user_info.STATE_CODE%type,          
    p_CITY        in user_info.CITY%type,                  
    p_ZIP         in user_info.ZIP%type,         
    p_F_NAME      in user_info.F_NAME%type,         
    p_L_NAME      in user_info.L_NAME%type
)
is
    gen_user_id user_info.user_id%type;
begin
    gen_user_id := fn_gen_user_id();    
    insert into user_info( user_id,        
        USER_NAME,       
        PASSWORD,                 
        ADDRESS,                  
        PH_NO,                      
        EMAIL_ID,                  
        USER_TYPE,         
        USER_STATUS,      
        ADDRESS_2,             
        DOB_NUM_DATE,           
        GENDER,              
        COUNTRY_CODE,
        STATE_CODE,            
        CITY,                    
        ZIP,           
        F_NAME,           
        L_NAME )
       values ( gen_user_id,
                p_USER_NAME,       
                p_PASSWORD,                 
                p_ADDRESS,                  
                p_PH_NO,                      
                p_EMAIL_ID,                  
                p_USER_TYPE,         
                p_USER_STATUS,      
                p_ADDRESS_2,             
                p_DOB_NUM_DATE,           
                p_GENDER,              
                p_COUNTRY_CODE,
                p_STATE_CODE,            
                p_CITY,                    
                p_ZIP,           
                p_F_NAME,           
                p_L_NAME    
            );
    p_user_id := gen_user_id;
end;
/

