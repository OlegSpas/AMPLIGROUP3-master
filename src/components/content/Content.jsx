import React from 'react';
import Column from '../column/Column';
import ColumnCreator from '../columnCreator/ColumnCreator';
import {ChangeColumnName, DeleteKey, ReadData } from '../../data/dataWorker';

import './styles.css';

class Content extends React.Component {
	constructor(){
		super()
		this.state = ReadData();
	}


		handleAddColumn = (newColumn) => {
		const { columns } = this.state;

		columns.push(newColumn);

		this.setState({
			columns: columns
		})
		}

		editColumn = (columnId, newName) => {
			const { columns } = this.state
	
			columns[columnId].name = newName

			//ChangeColumnName(columns.name)
	
			
	
			this.setState({
				columns: columns
			})
		}

	deleteColumn = (columnId) => {
		const { columns } = this.state
		const columnToDelete = columns.splice(columnId, 1)
		console.log(columnToDelete)
		DeleteKey(columnToDelete[0].name)
		

		columns.splice(columnId, 1)

		this.setState({
			columns: columns
		})
	}

	render(){
		const { columns } = this.state;

		console.log(this.state)

		return (
			<div className="content">
				{
					columns.map((item, index) => (
						<Column 
						
							name={item.name}
							cards={item.cards}
							id={index}
							saveData={this.handleSaveData}
							removeColumn={this.deleteColumn}
							editColumn={this.editColumn}
						/>
					))

				}
				<ColumnCreator AddColumn={this.handleAddColumn} />
			</div>
		)
	}
}

export default Content;