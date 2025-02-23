-- for updating data into table employer_details
create or replace procedure sp_update_employer_details(
    p_EMPLOYER_ID         in employer_details.employer_id%type,
    p_USER_ID             in employer_details.USER_ID%type,                    
    p_ORGANIZATION_NAME   in employer_details.ORGANIZATION_NAME%type,                              
    p_INDUSTRY_ID         in employer_details.INDUSTRY_ID%type                      
)
is
    var_industry_name INDUSTRY_TYPE_ENUM.industry_name%type;
begin
    -- for getting industry name and storing it into the table
    select ite.industry_name into var_industry_name
        from INDUSTRY_TYPE_ENUM ite
        where ite.industry_id = p_INDUSTRY_ID;

   update employer_details set
       employer_id =        p_EMPLOYER_ID,
       user_id =            p_USER_ID,                    
       organization_name =  p_ORGANIZATION_NAME,          
       industry_id =        p_INDUSTRY_ID,
       industry_name =      var_industry_name
    where employer_id = p_EMPLOYER_ID; 
end;
/

select * from INDUSTRY_TYPE_ENUM;
