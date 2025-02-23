-- for inserting data into table employer_details
create or replace procedure sp_insert_into_employer_details(
    p_EMPLOYER_ID         out employer_details.employer_id%type,
    p_USER_ID             in employer_details.USER_ID%type,                    
    p_ORGANIZATION_NAME   in employer_details.ORGANIZATION_NAME%type,                              
    p_INDUSTRY_ID         in employer_details.INDUSTRY_ID%type                      
)
is
    gen_employer_id employer_details.employer_id%type;
    var_industry_name industry_type_enum.industry_name%type;
begin
    -- for getting industry name and storing it into the table
    select ite.industry_name into var_industry_name
        from INDUSTRY_TYPE_ENUM ite
        where ite.industry_id = p_INDUSTRY_ID;
    
    gen_employer_id := fn_gen_employer_id();
    p_EMPLOYER_ID := gen_employer_id;
       insert into employer_details
       values ( gen_employer_id,       
                p_USER_ID,                    
                p_ORGANIZATION_NAME,          
                p_INDUSTRY_ID,
                var_industry_name
            );
end;
/
