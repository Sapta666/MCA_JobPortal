-- for inserting data into table pre application data
create or replace procedure sp_insert_into_pre_application_data(
    p_PRE_APP_ID        out pre_application_data.pre_app_id%type,
    p_PRE_APP_DATA      in  pre_application_data.pre_app_data%type
)
is
    gen_pre_application_data_id pre_application_data.pre_app_id%type;
begin
    gen_pre_application_data_id := fn_gen_pre_application_data_id();
    
    p_PRE_APP_ID := gen_pre_application_data_id;
       insert into pre_application_data
       values ( gen_pre_application_data_id,       
                p_PRE_APP_DATA                   
            );
end;
/
