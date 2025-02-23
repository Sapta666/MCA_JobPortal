create table industry_type_enum (
    industry_id varchar2(10),
    industry_name varchar2(32) default '',
    constraint pk_#industry_type_enum_$industry_id primary key(industry_id)
);
    
desc industry_type_enum;

select * from industry_type_enum;

insert into industry_type_enum values ('indType101','Transport');
insert into industry_type_enum values ('indType102','Aerospace');
insert into industry_type_enum values ('indType103','Agriculture');
insert into industry_type_enum values ('indType104','Computer');
insert into industry_type_enum values ('indType105','Telecommunication');