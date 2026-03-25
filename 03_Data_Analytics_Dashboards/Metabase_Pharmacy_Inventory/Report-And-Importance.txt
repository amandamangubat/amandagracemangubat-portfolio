USE PharmacyInventory;
SHOW TABLES;
select * 
from medicines m ;
select * 
from suppliers s ;
select * 
from sales s ;
select * 
from stock_purchases sp  ;
select * 
from controlled_medicine cm ;

select drug_name, category, brand_name , quantity_in_stock
from medicines m ;

select drug_name , quantity_in_stock
from medicines m
where quantity_in_stock <= 20
order by quantity_in_stock asc;

select date_format(sale_date, '%Y-%m') as Month, sum(total_price) as Total_Revenue
from sales s 
group by Month
order by Month asc;

select drug_name, expiration_date
from medicines m 
where expiration_date between curdate() and date_add(curdate(), interval 5 month)
order by expiration_date asc;

select doctor_name, patient_name, drug_name as Medicine_Name, date_prescribed
from controlled_medicine cm
join medicines m on cm.medicine_id = m.medicine_id 
where date_prescribed >= date_sub(curdate(), interval 30 day);

select m.drug_name, sum(s.quantity_sold) as Total_Sold
from sales s 
join medicines m on s.medicine_id = m.medicine_id 
group by m.drug_name 
order by Total_Sold desc 
limit 10;

select m.drug_name as Drug_Name, sum(s.quantity_sold) as Total_Sold
from sales s 
join medicines m on s.medicine_id = m.medicine_id 
group by m.drug_name 
order by Total_Sold asc 
limit 10;

select m.drug_name, sum(s.total_price) as Total_Revenue
from sales s 
join medicines m on s.medicine_id = m.medicine_id 
group by m.drug_name 
order by Total_Revenue desc;

select sale_date, sum(total_price) as Daily_Revenue
from sales s 
group by sale_date 
order by sale_date desc;

select s.company_name as Supplier_Name, count(sp.purchase_id) as Total_Order
from stock_purchases sp 
join suppliers s ON sp.supplier_id = s.supplier_id 
group by s.company_name 
order by Total_Order desc;

select m.drug_name
from medicines m
left join sales s on m.medicine_id = s.medicine_id
where s.medicine_id is null;

select ms.Month, ms.drug_name AS Best_Selling_Product, ms.Total_Sold
from (select date_format(s.sale_date, '%Y-%m') as Month, m.drug_name, sum(s.quantity_sold) as Total_Sold
    from sales s
    join medicines m on s.medicine_id = m.medicine_id
    group by Month, m.drug_name
) ms
where ms.Total_Sold = (
    select max(sub.Total_Sold)
    from (select date_format(s2.sale_date, '%Y-%m') as Month, sum(s2.quantity_sold) as Total_Sold
        from sales s2
        group by Month, s2.medicine_id
    ) sub
    where sub.Month = ms.Month
)
order by ms.Month asc;










