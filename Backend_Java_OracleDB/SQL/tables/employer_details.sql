create table employer_details (
    employer_id varchar(32),
    user_id varchar2(32),
    organization_name varchar2(128) default '',
    industry_id varchar2(10),
    industry_name varchar2(32),
    constraint pk_#employer_details_$employer_id primary key(employer_id),
    constraint fk_#employer_details_$user_id_#user_info_$user_id foreign key(user_id) references user_info(user_id),
    constraint fk_#employer_details_$industry_id_#industry_type_enum_$industry_id foreign key (industry_id) references industry_type_enum(industry_id)
);

desc employer_details;

select * from employer_details;
