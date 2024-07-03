import requests
from config import wx_push


def data_to_md(order):
    text = f"""## 报修信息
> 订单编号 ：{order['order_id']} 
> 用户编号 ：{order['user_id']}
> 报修用户姓名：*** 
### 地点 
{order['one_location_name']} - {order['two_location_name']}- {order['final_location_name']}
### 损坏类型 - {order['damage_type_name']}
### 详细信息 
{order['damage_details']}"""
    return text


def data_to_html(order):
    html = f"""
        <style>
            body {{
                background-color: #2C2C2C;
                color: #FFFFFF;
                text-align: center;
                font-family: Arial, sans-serif;
            }}
            .report-container {{
                max-width: 600px;
                margin: auto;
                padding: 20px;
                background-color: #3C3C3C;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            }}
            .title {{
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 20px;
            }}
            .section-title {{
                font-size: 20px;
                margin-top: 20px;
                margin-bottom: 10px;
            }}
            .detail {{
                font-size: 22px;
                font-weight: bold;
                margin-bottom: 10px;
            }}
        </style>
        <div class="report-container">
            <div class="title">报修信息</div>
            <div class="detail"><strong>订单编号 ：</strong>{order['order_id']}</div>
            <div class="detail"><strong>用户编号 ：</strong>{order['user_id']}</div>
            <div class="section-title">地点</div>
            <div class="detail">{order['one_location_name']} - {order['two_location_name']} - {order['final_location_name']}</div>
            <div class="section-title">损坏类型</div>
            <div class="detail"> {order['damage_type_name']}</div>
            <div class="section-title">详细信息</div>
            <div class="detail">{order['damage_details']}</div>
        </div>
    """
    return html


def send_message(message):
    url = "https://wxpusher.zjiecode.com/api/send/message"
    headers = {
        "Content-Type": "application/json"
    }
    body = {
        "appToken": wx_push["appToken"],
        "content": message,
        "summary": "报修提醒",
        "contentType": 2,
        "topicIds": [
            wx_push['TopicId']
        ],
        "verifyPayType": 0
    }

    response = requests.post(url, headers=headers, json=body)
    # print(response.text)
    if response.status_code == 200:
        return True
    return False
